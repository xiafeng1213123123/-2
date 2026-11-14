// Keep the existing experience hidden until its scripts, styles, font and images are ready.
(() => {
  const loading = document.getElementById('loading');
  const message = document.getElementById('loading-message');
  const progress = document.getElementById('loading-progress');
  const count = document.getElementById('loading-count');
  const retry = document.getElementById('loading-retry');
  const app = document.getElementById('app');
  const stylesheet = document.getElementById('app-styles');
  let running = false;

  function timeout(promise, label) {
    let timer;
    return Promise.race([
      promise,
      new Promise((_, reject) => { timer = setTimeout(() => reject(new Error(label)), 30000); })
    ]).finally(() => clearTimeout(timer));
  }

  function loadStyles() {
    if (stylesheet.sheet) { stylesheet.media = 'all'; return Promise.resolve(); }
    // A fresh link also makes a failed stylesheet request retryable.
    return new Promise((resolve, reject) => {
      stylesheet.onload = () => { stylesheet.media = 'all'; resolve(); };
      stylesheet.onerror = () => reject(new Error('stylesheet'));
      stylesheet.href = new URL('./style.css', document.baseURI).href;
    });
  }

  async function loadImage(path) {
    const image = new Image();
    image.src = new URL(path, document.baseURI).href;
    await image.decode();
    if (!image.naturalWidth) throw new Error(path);
    return image;
  }

  async function prepare() {
    if (running) return;
    running = true;
    retry.hidden = true;
    loading.setAttribute('aria-busy', 'true');
    message.textContent = '让每一页，都准备好再与你见面。';
    progress.value = 0;
    count.textContent = '0%';
    let completed = 0;
    const total = 7;
    const tracked = promise => timeout(promise, 'resource timeout').then(value => {
      completed++;
      progress.value = Math.round(completed / total * 100);
      count.textContent = `${progress.value}%`;
      return value;
    });
    const styles = tracked(loadStyles());
    const tasks = [
      styles,
      tracked(styles.then(async () => {
        const fonts = await document.fonts.load('24px WenKai', '日常优势小册');
        if (!fonts.length) throw new Error('font');
        await document.fonts.ready;
      })),
      tracked(loadImage('./assets/animals.png')),
      tracked(loadImage('./assets/entry-qr.svg')),
      tracked(loadImage('./assets/favicon.svg')),
      tracked(import('./app.js')),
      tracked(import('./sound.js').then(sound => sound.prepareSelectionSound()))
    ];
    try {
      await Promise.all(tasks);
      app.hidden = false;
      app.inert = false;
      document.body.classList.remove('is-loading');
      loading.setAttribute('aria-busy', 'false');
      loading.hidden = true;
      document.dispatchEvent(new Event('app:ready'));
    } catch (error) {
      // Settle this attempt before allowing another one to update the progress display.
      await Promise.allSettled(tasks);
      loading.setAttribute('aria-busy', 'false');
      message.textContent = '加载暂时中断，请检查网络后重试。';
      retry.hidden = false;
      console.warn('Unable to prepare the notebook:', error);
    } finally {
      running = false;
    }
  }

  retry.addEventListener('click', () => {
    // Reload failed module requests too: browsers cache rejected module imports.
    location.reload();
  });
  prepare();
})();
