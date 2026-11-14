export const VERSION = 'daily-strengths-1.0';
export const STAGES = { school: '高中', university: '大学', work: '工作' };
export const OPTIONS = ['很不像我', '不太像我', '一半一半', '比较像我', '很像我'];
export const DOMAINS = [
  { id:'care', name:'关照力', animal:0, companion:'抱叶小兔', color:'#f1c8bd', paper:'#f8e6df', title:'让人安心的小事，你一直在做', short:'你愿意留意感受，也愿意用行动回应。', tags:['细腻的关照','真诚回应','体贴有分寸'], strength:'你的关照常体现在具体的小动作里：听完一句话、记住一个偏好，或在合适的时候伸出手。', balance:'照顾别人时，也给自己的时间和感受留一个位置。', action:'这周选择一次帮助：先确认对方需要什么，再决定自己愿意做到哪一步。', scenes:{school:'同学有些低落时，你可能会先听她说完，而不是立刻告诉她该怎么做。',university:'朋友或室友状态不太好时，你可能会留意她需要陪伴，还是需要一点空间。',work:'同事遇到困难时，你可能会先了解她卡在哪里，再给出具体的支持。'} },
  { id:'notice', name:'观察力', animal:1, companion:'记事小鸮', color:'#b9d2d9', paper:'#e4eef0', title:'你看见的，常比第一眼多一点', short:'你愿意追问原因，也留意容易被略过的线索。', tags:['留意细节','好奇追问','寻找线索'], strength:'当你愿意停下来观察、比较信息和追问原因时，事情的另一种可能就会浮现。', balance:'了解得更多很有价值，也可以为探索留一个结束的时间。', action:'选一件最近好奇的小事，写下一个问题，再找两种不同来源核对。', scenes:{school:'面对一道题，你可能会想知道解题思路为什么成立，而不只记住答案。',university:'接触一个新观点时，你可能会想找原始资料，再形成自己的判断。',work:'遇到重复出现的小问题时，你可能会留意规律，寻找背后的共同原因。'} },
  { id:'create', name:'创想力', animal:2, companion:'画画小狐', color:'#edbf96', paper:'#f9e9d9', title:'你会给平常的事，添一种可能', short:'你愿意换个角度，也愿意把想法做成一点什么。', tags:['换个角度','大胆联想','表达想法'], strength:'新点子不一定很宏大。重新组织一句话、组合两种材料，或找到另一种做法，都是创造的线索。', balance:'点子很多时，先保留一个可以尝试的小版本，让灵感有机会落地。', action:'给一件熟悉的小事想三种不同做法，从最容易的一种开始试。', scenes:{school:'展示作业或准备活动时，你可能会想到一种更有趣的讲述或呈现方式。',university:'做课程展示、布置房间或记录生活时，你可能会加入自己的小巧思。',work:'面对一项熟悉任务时，你可能会尝试一种更清楚或更省力的呈现方式。'} },
  { id:'connect', name:'联结力', animal:3, companion:'送信小鸟', color:'#b8d3df', paper:'#e4edf2', title:'你让不同的声音，有机会相遇', short:'你愿意把话说清楚，也留意彼此能理解的部分。', tags:['搭起桥梁','表达清楚','寻找共识'], strength:'联结可以很安静：多问一句、确认一次理解，或帮助两种不同意见找到共同的起点。', balance:'你可以帮助沟通，也可以让每个人为自己的表达负责。', action:'下一次意见不同时，先用一句话确认对方的意思，再说出自己的需要。', scenes:{school:'小组讨论有分歧时，你可能会先确认大家分别在意什么。',university:'社团活动或小组合作中，你可能会帮助不同想法找到能够一起推进的部分。',work:'合作中信息不一致时，你可能会把目标、分工和需要确认的事项说清楚。'} },
  { id:'recover', name:'复原力', animal:4, companion:'发芽小龟', color:'#b7c99b', paper:'#e7eddd', title:'你在慢慢找回自己的节奏', short:'你留意自己的状态，也愿意调整步子继续走。', tags:['调整节奏','允许休息','重新出发'], strength:'复原可以体现在一次休息、一次求助和一次重新安排里。重要的是你如何回应变化，而不只是坚持多久。', balance:'有些困难需要更多时间和外部支持，休息与求助都可以是下一步。', action:'为忙碌的一天留出一件真正能恢复精力的小事，并观察做完后的感受。', scenes:{school:'一次成绩不如预期后，你可能会先缓一缓，再调整下一步的复习安排。',university:'课程、活动或关系让你疲惫时，你可能会尝试重新分配精力。',work:'工作节奏被打乱后，你可能会调整安排、寻求支持，再逐步恢复自己的步调。'} },
  { id:'act', name:'落实力', animal:5, companion:'收集小松鼠', color:'#d1b694', paper:'#efe5d8', title:'那些被你做完的小事，会慢慢发光', short:'你愿意把想法拆开，一点一点推进到完成。', tags:['拆成小步','稳稳推进','认真收尾'], strength:'把计划写清楚、从一小步开始、及时跟进进度，这些日常行为让想法有机会变成现实。', balance:'安排越满未必越有效，为意外和休息留一点空白，计划会更有弹性。', action:'选一件拖着的小事，只写下一个十分钟内能开始的步骤，完成后再决定下一步。', scenes:{school:'面对一项较大的学习任务，你可能会先拆出今天可以完成的一部分。',university:'面对课程作业或个人计划，你可能会拆分步骤，并在截止前跟进进度。',work:'接到任务后，你可能会先明确下一步、需要的资源和预计完成时间。'} }
];

// Original exploratory statements. Six domains × four items. Not a standardized scale.
// Fixed interleaved presentation; response anchors and one-month recall are invariant.
export const QUESTIONS = [
  {id:'n1',d:'notice',text:'遇到一个不熟悉的说法，我会想弄清它是什么意思。'},
  {id:'c1',d:'care',text:'别人说起烦恼时，我会先听听她真正介意的是什么。'},
  {id:'a1',d:'act',text:'事情有点多时，我会先找出眼下能做的一小步。'},
  {id:'e1',d:'create',text:'面对熟悉的任务，我也会想到不同的做法。'},
  {id:'r1',d:'recover',text:'发现自己有些累了，我会调整当天的安排。'},
  {id:'l1',d:'connect',text:'交流时，我会确认自己有没有理解对方的意思。'},
  {id:'c2',d:'care',text:'我会记住身边人提过的一些小偏好。'},
  {id:'n2',d:'notice',text:'做决定前，我会比较不同来源的信息。'},
  {id:'e2',d:'create',text:'我会把想到的点子，用文字、图画或其他方式记录下来。'},
  {id:'a2',d:'act',text:'有了计划后，我会主动跟进它的进展。'},
  {id:'l2',d:'connect',text:'意见不同时，我会尝试找到双方都在意的部分。'},
  {id:'r2',d:'recover',text:'事情不如预期时，我会找一种方式让自己慢慢平静下来。'},
  {id:'e3',d:'create',text:'我更愿意照着已有的方法做，很少尝试新的组合。',reverse:true},
  {id:'l3',d:'connect',text:'出现误会时，我通常会搁置沟通，等待对方自己明白。',reverse:true},
  {id:'c3',d:'care',text:'别人需要支持时，我会先问她希望得到什么帮助。'},
  {id:'r3',d:'recover',text:'计划被打乱后，我常会很久都找不到下一步。',reverse:true},
  {id:'a3',d:'act',text:'开始一件事后，我常把后续步骤一直往后放。',reverse:true},
  {id:'n3',d:'notice',text:'遇到问题时，我通常接受第一个解释，很少再追问。',reverse:true},
  {id:'l4',d:'connect',text:'需要一起做事时，我会把自己的想法和需要说清楚。'},
  {id:'e4',d:'create',text:'看到两件不相关的东西，我有时会想到它们可以怎样搭配。'},
  {id:'n4',d:'notice',text:'日常生活中，我会注意到一些容易被略过的小变化。'},
  {id:'a4',d:'act',text:'快完成一件事时，我会检查还剩哪些地方需要收尾。'},
  {id:'r4',d:'recover',text:'一个办法行不通时，我愿意调整做法，或找人商量。'},
  {id:'c4',d:'care',text:'别人表达感受时，我常会很快把话题转回自己。',reverse:true}
];

export function validAnswers(answers) {
  return Array.isArray(answers) && answers.length===QUESTIONS.length && answers.every(v=>v===null||(Number.isInteger(v)&&v>=1&&v<=5));
}
export function scoreAnswers(answers) {
  if(!validAnswers(answers)||answers.some(v=>v===null)) throw new Error('请完成全部题目');
  const scores=DOMAINS.map((d,index)=>{
    const items=QUESTIONS.map((q,i)=>q.d===d.id?(q.reverse?6-answers[i]:answers[i]):null).filter(v=>v!==null);
    return {id:d.id,index,mean:items.reduce((a,b)=>a+b,0)/items.length};
  });
  const ranked=[...scores].sort((a,b)=>b.mean-a.mean||a.index-b.index);
  const tied=ranked.filter(d=>d.mean===ranked[0].mean).map(d=>d.id);
  return {scores,ranked,top:ranked[0],tied,low:ranked[0].mean<3,uniform:answers.every(v=>v===answers[0])};
}
export function resultIntro(result, domain) {
  if(result.low) return '这次自评中，六个方向的表现都还不常出现。你可以从一件愿意尝试的小事开始，继续认识自己。';
  if(result.tied.length===DOMAINS.length) return '这次自评中，六个方向的得分相同。你可以结合最近的一件具体经历，看看哪些描述更贴近自己。';
  if(result.tied.length>1) return `这次自评中，${result.tied.map(id=>DOMAINS.find(d=>d.id===id).name).join('、')}并列靠前。${domain.short}`;
  return domain.short;
}
