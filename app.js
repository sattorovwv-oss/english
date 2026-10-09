(() => {
  'use strict';
  const words = window.LUGAT_WORDS;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const paths = {
    book:'<path d="M12 7v14M12 7C9 4 5 4 2 5v14c3-1 7-1 10 2 3-3 7-3 10-2V5c-3-1-7-1-10 2Z"/>',
    bookmark:'<path d="M6 4h12v17l-6-4-6 4V4Z"/>',
    checkCircle:'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    layers:'<path d="m12 3 10 6-10 6L2 9l10-6Zm-9 11 9 5 9-5M3 18l9 5 9-5"/>',
    sparkles:'<path d="m12 3 2.3 6.7L21 12l-6.7 2.3L12 21l-2.3-6.7L3 12l6.7-2.3L12 3ZM20 2v4M18 4h4"/>',
    globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-5 5-5 13 0 18 5-5 5-13 0-18Z"/>',
    languages:'<path d="M3 5h12M9 3v2M5 5c1 6 5 9 9 11M13 5C12 11 8 15 3 17m10 4 5-13 5 13m-8-5h6"/>',
    moon:'<path d="M21 13a9 9 0 0 1-10-10A9 9 0 1 0 21 13Z"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5"/>',
    volume:'<path d="m11 4-6 5H2v6h3l6 5V4Zm5 4c3 2 3 6 0 8m3-11c5 4 5 10 0 14"/>',
    search:'<circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5 5"/>',
    close:'<path d="m6 6 12 12M18 6 6 18"/>',
    grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    list:'<path d="M9 5h12M9 12h12M9 19h12M3 5h1M3 12h1M3 19h1"/>',
    sort:'<path d="M4 5h16M4 12h11M4 19h6"/>',
    eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    eyeOff:'<path d="m3 3 18 18M10 5c7-1 12 7 12 7s-1 2-3 4M6 6c-3 2-4 6-4 6s4 7 10 7c2 0 4-1 5-2M10 10a3 3 0 0 0 4 4"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    rotate:'<path d="M20 7v5h-5M4 17v-5h5M6 6a8 8 0 0 1 14 6M4 12a8 8 0 0 0 14 6"/>'
  };
  const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.book}</svg>`;
  $$('[data-icon]').forEach(el => {el.innerHTML = icon(el.dataset.icon);});

  const translations = {
    ru: {
      skip:'Перейти к словарю', yourSpace:'ТВОЁ ПРОСТРАНСТВО', dictionary:'Словарь', saved:'Избранное', learned:'Изученные', practice:'Тренировка', cards:'карточки', yourProgress:'Твой прогресс', sidebarNote:'Один словарь.<br>Три языка. Тысяча возможностей.', englishDictionary:'Английский словарь', personalLibrary:'Твоя библиотека', dailyLittle:'НЕМНОГО АНГЛИЙСКОГО КАЖДЫЙ ДЕНЬ', headline:'Большой мир<br>начинается со <span>слова.</span>', intro:'Находи, слушай и запоминай. 1000 слов и выражений с переводом на русский и тоҷикӣ.', wordOfDay:'СЛОВО ДНЯ', listen:'Послушать', practice20:'Повторить 20 слов', searchLabel:'Поиск по трём языкам', hideTranslations:'Скрыть перевод', showTranslations:'Показать перевод', resetFilters:'Сбросить фильтры', showMore:'Ещё 24 слова', footerNote:'Учись в своём ритме.', practiceEyebrow:'ВРЕМЯ ПОВТОРИТЬ', searchPlaceholder:'Ищи на English, русском или тоҷикӣ…', viewTitles:{all:'Твой словарь',saved:'Твои избранные',learned:'Уже знаешь'}, allParts:'Все 1000 слов', part:'Часть', original:'По порядку', emptySearch:'Такого слова пока нет', emptySearchNote:'Попробуй другое слово или выбери все части словаря.', emptySaved:'Сохрани первое слово', emptySavedNote:'Нажми на закладку рядом со словом, чтобы вернуться к нему.', emptyLearned:'Всё начинается с одного слова', emptyLearnedNote:'Отмечай знакомые слова кнопкой «Знаю» — здесь будет твой прогресс.', wordsCount:n=>`${n} ${n%10===1&&n%100!==11?'слово':n%10>=2&&n%10<=4&&(n%100<12||n%100>14)?'слова':'слов'}`, shown:(n,total)=>`Показано ${n} из ${total}`, progressStart:'Каждое новое слово — шаг вперёд.', progressNote:n=>`Уже изучено ${n}% словаря. Продолжай!`, progressDone:'Все 1000 слов изучены. Отличная работа!', know:'Знаю', known:'Изучено', markKnown:'Отметить как изученное', markUnknown:'Убрать из изученных', save:'В избранное', unsave:'Убрать из избранного', savedToast:'Слово добавлено в избранное', unsavedToast:'Слово убрано из избранного', learnedToast:'Ещё одно слово изучено!', unlearnedToast:'Слово вернулось к повторению', reveal:'Открыть перевод', speechUnavailable:'Этот браузер не поддерживает озвучку.', speechError:'Озвучка сейчас недоступна. Используй подсказку произношения.', storageError:'Браузер не сохранил прогресс. Разреши хранение данных для этого сайта.', close:'Закрыть', theme:'Переключить тему', grid:'Карточки', list:'Список', sort:'Сортировка', chapter:'Часть словаря', clearSearch:'Очистить поиск', uiLanguage:'Язык интерфейса', noPractice:'Выбери слова в словаре, чтобы начать тренировку.', practiceCount:(n,total)=>`Карточка ${n} из ${total}`, practiceHint:'Нажми, чтобы открыть перевод', practiceNote:'Сначала вспомни перевод, потом открой карточку.<br>«Знаю» сохраняет слово в изученных.', again:'Ещё повторю', practiceKnow:'Знаю это слово', practiceDone:'Хорошая работа!', practiceSummary:(n,total)=>`Ты повторил ${total} ${total===1?'слово':'слов'}. Знакомых: ${n}.`, practiceAgain:'Повторить ещё', backDictionary:'Вернуться к словарю', source:'Слова: МуҳаммадҲусейн', localNotice:'Прогресс сохранён на этом устройстве.'
    },
    tj: {
      skip:'Гузаштан ба луғат', yourSpace:'ФАЗОИ ТУ', dictionary:'Луғат', saved:'Баргузида', learned:'Омӯхташуда', practice:'Машқ', cards:'кортҳо', yourProgress:'Пешрафти ту', sidebarNote:'Як луғат.<br>Се забон. Ҳазор имконият.', englishDictionary:'Луғати англисӣ', personalLibrary:'Китобхонаи ту', dailyLittle:'ҲАР РӮЗ КАМЕ АНГЛИСӢ', headline:'Ҷаҳони бузург<br>аз як <span>калима</span> оғоз мешавад.', intro:'Ҷустуҷӯ кун, гӯш кун ва дар хотир нигоҳ дор. 1000 калима ва ибора бо тарҷумаи русӣ ва тоҷикӣ.', wordOfDay:'КАЛИМАИ РӮЗ', listen:'Гӯш кардан', practice20:'Машқи 20 калима', searchLabel:'Ҷустуҷӯ бо се забон', hideTranslations:'Пинҳон кардани тарҷума', showTranslations:'Нишон додани тарҷума', resetFilters:'Тоза кардани филтрҳо', showMore:'Боз 24 калима', footerNote:'Бо суръати худ омӯз.', practiceEyebrow:'ВАҚТИ ТАКРОР', searchPlaceholder:'Бо English, русӣ ё тоҷикӣ ҷустуҷӯ кун…', viewTitles:{all:'Луғати ту',saved:'Калимаҳои баргузида',learned:'Аллакай медонӣ'}, allParts:'Ҳамаи 1000 калима', part:'Қисм', original:'Аз рӯи тартиб', emptySearch:'Калима ёфт нашуд', emptySearchNote:'Калимаи дигарро навис ё ҳамаи қисмҳои луғатро интихоб кун.', emptySaved:'Калимаи аввалро нигоҳ дор', emptySavedNote:'Нишонаи хатчӯбро дар назди калима пахш кун, то боз ба он баргардӣ.', emptyLearned:'Аз як калима оғоз кун', emptyLearnedNote:'Калимаҳои шиносро бо тугмаи «Медонам» қайд кун.', wordsCount:n=>`${n} калима`, shown:(n,total)=>`${n} аз ${total} калима нишон дода шуд`, progressStart:'Ҳар калимаи нав — як қадам ба пеш.', progressNote:n=>`${n}% луғат омӯхта шуд. Идома деҳ!`, progressDone:'Ҳамаи 1000 калима омӯхта шуд. Офарин!', know:'Медонам', known:'Омӯхта шуд', markKnown:'Ҳамчун омӯхташуда қайд кардан', markUnknown:'Аз омӯхташуда хориҷ кардан', save:'Ба баргузида', unsave:'Аз баргузида хориҷ кардан', savedToast:'Калима ба баргузида илова шуд', unsavedToast:'Калима аз баргузида хориҷ шуд', learnedToast:'Боз як калима омӯхта шуд!', unlearnedToast:'Калима барои такрор баргашт', reveal:'Кушодани тарҷума', speechUnavailable:'Ин браузер хониши овозиро дастгирӣ намекунад.', speechError:'Хониши овозӣ ҳоло дастрас нест. Аз транскрипсия истифода бар.', storageError:'Браузер пешрафтро нигоҳ надошт. Нигоҳдории маълумотро иҷозат деҳ.', close:'Пӯшидан', theme:'Иваз кардани мавзӯъ', grid:'Кортҳо', list:'Рӯйхат', sort:'Тартиб', chapter:'Қисми луғат', clearSearch:'Тоза кардани ҷустуҷӯ', uiLanguage:'Забони интерфейс', noPractice:'Барои машқ калимаҳоро аз луғат интихоб кун.', practiceCount:(n,total)=>`Корти ${n} аз ${total}`, practiceHint:'Барои кушодани тарҷума пахш кун', practiceNote:'Аввал тарҷумаро ба ёд биёр, баъд кортро кушо.<br>«Медонам» калимаро ҳамчун омӯхташуда нигоҳ медорад.', again:'Боз такрор мекунам', practiceKnow:'Ин калимаро медонам', practiceDone:'Офарин!', practiceSummary:(n,total)=>`Ту ${total} калимаро такрор кардӣ. Шинос: ${n}.`, practiceAgain:'Боз машқ кардан', backDictionary:'Бозгашт ба луғат', source:'Калимаҳо: МуҳаммадҲусейн', localNotice:'Пешрафт дар ин дастгоҳ нигоҳ дошта мешавад.'
    },
    en: {
      skip:'Skip to dictionary', yourSpace:'YOUR SPACE', dictionary:'Dictionary', saved:'Saved words', learned:'Learned', practice:'Practice', cards:'flashcards', yourProgress:'Your progress', sidebarNote:'One dictionary.<br>Three languages. A thousand possibilities.', englishDictionary:'English dictionary', personalLibrary:'Your library', dailyLittle:'A LITTLE ENGLISH, EVERY DAY', headline:'A bigger world<br>starts with a <span>word.</span>', intro:'Find, listen and remember. 1000 words and expressions with Russian and Tajik translations.', wordOfDay:'WORD OF THE DAY', listen:'Listen', practice20:'Practice 20 words', searchLabel:'Search in three languages', hideTranslations:'Hide translations', showTranslations:'Show translations', resetFilters:'Reset filters', showMore:'24 more words', footerNote:'Learn at your own pace.', practiceEyebrow:'A MOMENT TO PRACTICE', searchPlaceholder:'Search in English, Russian or Tajik…', viewTitles:{all:'Your dictionary',saved:'Your saved words',learned:'Words you know'}, allParts:'All 1000 words', part:'Part', original:'Original order', emptySearch:'No words found', emptySearchNote:'Try another word or select all dictionary parts.', emptySaved:'Save your first word', emptySavedNote:'Tap the bookmark next to a word to come back to it.', emptyLearned:'It starts with a single word', emptyLearnedNote:'Mark familiar words with “I know it” to see your progress here.', wordsCount:n=>`${n} ${n===1?'word':'words'}`, shown:(n,total)=>`Showing ${n} of ${total}`, progressStart:'Every new word is a step forward.', progressNote:n=>`${n}% of the dictionary learned. Keep going!`, progressDone:'All 1000 words learned. Great work!', know:'I know it', known:'Learned', markKnown:'Mark as learned', markUnknown:'Remove from learned words', save:'Save word', unsave:'Unsave word', savedToast:'Word saved to your favorites', unsavedToast:'Word removed from favorites', learnedToast:'One more word learned!', unlearnedToast:'Word is ready for more practice', reveal:'Reveal translation', speechUnavailable:'This browser does not support speech.', speechError:'Speech is unavailable right now. Use the pronunciation guide.', storageError:'The browser could not save progress. Allow storage for this website.', close:'Close', theme:'Switch theme', grid:'Cards', list:'List', sort:'Sort words', chapter:'Dictionary part', clearSearch:'Clear search', uiLanguage:'Interface language', noPractice:'Choose words in the dictionary to start practicing.', practiceCount:(n,total)=>`Card ${n} of ${total}`, practiceHint:'Tap to reveal the translation', practiceNote:'Try to remember the translation before you reveal it.<br>“I know it” saves the word to your learned list.', again:'Practice again', practiceKnow:'I know this word', practiceDone:'Nicely done!', practiceSummary:(n,total)=>`You practiced ${total} ${total===1?'word':'words'}. You knew ${n}.`, practiceAgain:'Practice another set', backDictionary:'Back to dictionary', source:'Words: МуҳаммадҲусейн', localNotice:'Progress is saved on this device.'
    }
  };

  const storageKey = 'lugat_preferences_v1';
  let stored = {};
  try {stored = JSON.parse(localStorage.getItem(storageKey) || '{}') || {};} catch (_) {stored = {};}
  const validIds = new Set(words.map(w => w.id));
  const asIds = value => new Set((Array.isArray(value) ? value : []).filter(id => validIds.has(id)));
  const state = {lang:['ru','tj','en'].includes(stored.lang) ? stored.lang : 'ru',theme:stored.theme === 'dark' ? 'dark' : 'light',saved:asIds(stored.saved),learned:asIds(stored.learned),layout:stored.layout === 'list' ? 'list' : 'grid',hidden:stored.hidden === true,view:'all',query:'',chapter:0,sort:'original',limit:24,revealed:new Set()};
  let session = null, toastTimer = null;
  const t = (key,...args) => typeof translations[state.lang][key] === 'function' ? translations[state.lang][key](...args) : translations[state.lang][key];
  function toast(message) {const el = $('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),3200);}
  function persist() {try {localStorage.setItem(storageKey,JSON.stringify({lang:state.lang,theme:state.theme,saved:[...state.saved],learned:[...state.learned],layout:state.layout,hidden:state.hidden}));}catch(_){toast(t('storageError'));}}
  const normalize = text => String(text).normalize('NFKC').toLocaleLowerCase().replace(/ё/g,'е').replace(/[’‘]/g,"'").trim();
  const searchable = new Map(words.map(w=>[w.id,normalize(`${w.en} ${w.ru} ${w.tj} ${w.pron}`)]));
  function filteredWords() {
    const query=normalize(state.query);
    let list=words.filter(w => (state.view==='all'||state[state.view].has(w.id)) && (!state.chapter||Math.ceil(w.id/20)===state.chapter) && (!query||searchable.get(w.id).includes(query)));
    if(state.sort==='az')list.sort((a,b)=>a.en.localeCompare(b.en,'en'));
    if(state.sort==='za')list.sort((a,b)=>b.en.localeCompare(a.en,'en'));
    return list;
  }
  function card(w,i) {
    const known=state.learned.has(w.id), saved=state.saved.has(w.id), hidden=state.hidden&&!state.revealed.has(w.id), part=Math.ceil(w.id/20);
    return `<article class="word-card ${known?'is-learned':''}" style="--i:${i%12}" data-id="${w.id}"><div class="card-top"><span class="word-number">#${String(w.id).padStart(3,'0')}</span><div class="card-actions"><button data-action="listen" aria-label="${esc(t('listen')+': '+w.en)}">${icon('volume')}</button><button data-action="save" class="${saved?'saved':''}" aria-label="${esc(t(saved?'unsave':'save')+': '+w.en)}" aria-pressed="${saved}">${icon('bookmark')}</button></div></div><div class="word-core"><h3 class="word-english" lang="en">${esc(w.en)}</h3><p class="word-pron">${esc(w.pron)}</p></div><div class="word-translations">${hidden?`<button class="reveal-word" data-action="reveal">${icon('eye')}<span>${esc(t('reveal'))}</span></button>`:`<div class="translation-row" data-lang="ru"><span class="lang-label">RU</span><span class="translation-value" lang="ru">${esc(w.ru)}</span></div><div class="translation-row" data-lang="tj"><span class="lang-label">TJ</span><span class="translation-value" lang="tg">${esc(w.tj)}</span></div>`}</div><div class="card-bottom"><span class="word-chapter">${esc(t('part'))} ${String(part).padStart(2,'0')}</span><button class="learn-button ${known?'is-learned':''}" data-action="learn" aria-pressed="${known}" aria-label="${esc(t(known?'markUnknown':'markKnown')+': '+w.en)}">${icon(known?'checkCircle':'check')}<span>${esc(t(known?'known':'know'))}</span></button></div></article>`;
  }
  function renderWords(append=false) {
    const list=filteredWords(), shown=list.slice(0,state.limit), grid=$('#word-grid');
    if(append){const from=grid.children.length;grid.insertAdjacentHTML('beforeend',shown.slice(from).map((w,i)=>card(w,i)).join(''));}
    else grid.innerHTML=shown.map(card).join('');
    grid.classList.toggle('list-mode',state.layout==='list');
    $('#result-count').textContent=t('wordsCount',list.length);
    $('#shown-count').textContent=t('shown',shown.length,list.length);
    $('#load-more-wrap').hidden=list.length===0;
    $('#load-more').hidden=shown.length>=list.length;
    $('#empty-state').hidden=list.length>0;
    const emptyKind=state.query||state.chapter?'Search':state.view==='saved'?'Saved':state.view==='learned'?'Learned':'Search';
    $('#empty-title').textContent=t('empty'+emptyKind);
    $('#empty-text').textContent=t('empty'+emptyKind+'Note');
    $('#reset-filters').hidden=!(state.query||state.chapter||state.view!=='all');
    $('#search-clear').hidden=!state.query;
    $('#view-title').innerHTML=esc(t('viewTitles')[state.view])+'<span class="title-dot">.</span>';
    $('#translation-toggle').innerHTML=icon(state.hidden?'eyeOff':'eye')+`<span>${esc(t(state.hidden?'showTranslations':'hideTranslations'))}</span>`;
    $('#translation-toggle').setAttribute('aria-pressed',String(state.hidden));
    for(const layout of ['grid','list']){$('#'+layout+'-view').classList.toggle('active',state.layout===layout);$('#'+layout+'-view').setAttribute('aria-pressed',String(state.layout===layout));}
  }
  function updateProgress() {
    $('#saved-count').textContent=state.saved.size;
    $('#learned-count').textContent=state.learned.size;
    $('#progress-value').textContent=state.learned.size;
    const percent=Math.round(state.learned.size/words.length*100);
    $('#progress-fill').style.width=percent+'%';
    $('#progress-note').textContent=state.learned.size===1000?t('progressDone'):state.learned.size?t('progressNote',percent):t('progressStart');
  }
  function setWordStatus(ids,field,enabled){for(const id of ids){if(enabled)state[field].add(id);else state[field].delete(id);}persist();updateProgress();}
  const dailyCandidates=['world','learn','dream','time','friend','beautiful','life','happy','travel','book','sun','home'];
  const dailyPool=dailyCandidates.map(en=>words.find(w=>w.en.toLowerCase()===en)).filter(Boolean);
  const dayNumber=Math.floor(Date.now()/86400000);
  const dailyWord=dailyPool[dayNumber%dailyPool.length];
  function localize() {
    document.documentElement.lang=state.lang==='tj'?'tg':state.lang;
    document.title=state.lang==='ru'?'LUGAT — английский ближе':state.lang==='tj'?'LUGAT — англисӣ наздиктар':'LUGAT — a word, a world';
    $$('[data-i18n]').forEach(el=>{el.innerHTML=t(el.dataset.i18n);});
    $('#ui-language').value=state.lang;
    $('#search').placeholder=t('searchPlaceholder');
    const chapter=$('#chapter');chapter.innerHTML=`<option value="0">${esc(t('allParts'))}</option>`+Array.from({length:50},(_,i)=>`<option value="${i+1}">${esc(t('part'))} ${String(i+1).padStart(2,'0')} · ${i*20+1}–${(i+1)*20}</option>`).join('');chapter.value=state.chapter;
    $('#sort option[value="original"]').textContent=t('original');
    const labels={'#theme-toggle':'theme','#grid-view':'grid','#list-view':'list','#sort':'sort','#chapter':'chapter','#search-clear':'clearSearch','#ui-language':'uiLanguage','#close-practice':'close'};
    for(const [selector,key] of Object.entries(labels))$(selector).setAttribute('aria-label',t(key));
    $('#source-credit').innerHTML=`<a href="https://t.me/mh_teaches" target="_blank" rel="noopener noreferrer">${esc(t('source'))}</a>`;
    $('#daily-date').textContent=new Intl.DateTimeFormat(state.lang==='tj'?'tg-TJ':state.lang==='ru'?'ru-RU':'en-GB',{day:'numeric',month:'short'}).format(new Date());
    $('#daily-en').textContent=dailyWord.en;$('#daily-pron').textContent=dailyWord.pron;$('#daily-ru').textContent=dailyWord.ru;$('#daily-tj').textContent=dailyWord.tj;$('#daily-index').textContent='#'+String(dailyWord.id).padStart(3,'0');
    updateProgress();renderWords();
  }
  function applyTheme(){document.documentElement.classList.toggle('dark',state.theme==='dark');$('#theme-toggle').innerHTML=icon(state.theme==='dark'?'sun':'moon');}

  function speak(w,button) {
    if(!('speechSynthesis' in window)){toast(t('speechUnavailable'));return;}
    window.speechSynthesis.cancel();
    $$('.speaking').forEach(el=>el.classList.remove('speaking'));
    const utterance=new SpeechSynthesisUtterance(w.en.replace(/\//g,', '));utterance.lang='en-US';utterance.rate=.83;
    const voices=window.speechSynthesis.getVoices();const voice=voices.find(v=>v.lang==='en-US')||voices.find(v=>v.lang.startsWith('en'));if(voice)utterance.voice=voice;
    if(button)button.classList.add('speaking');
    const finish=()=>{if(button)button.classList.remove('speaking');};utterance.onend=finish;
    utterance.onerror=event=>{finish();if(!['canceled','interrupted'].includes(event.error))toast(t('speechError'));};
    try{window.speechSynthesis.speak(utterance);}catch(_){finish();toast(t('speechError'));}
  }
  function setView(view) {state.view=view;state.limit=24;state.chapter=0;state.query='';$('#search').value='';$('#chapter').value='0';$$('[data-view]').forEach(el=>{el.classList.toggle('active',el.dataset.view===view);if(el.dataset.view===view)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current');});renderWords();}
  $$('[data-view]').forEach(el=>el.addEventListener('click',()=>{setView(el.dataset.view);if(window.innerWidth<=650)$('#dictionary').scrollIntoView({block:'start'});}));
  $('#search').addEventListener('input',event=>{state.query=event.target.value;state.limit=24;renderWords();});
  $('#search-clear').addEventListener('click',()=>{state.query='';$('#search').value='';state.limit=24;renderWords();$('#search').focus();});
  $('#chapter').addEventListener('change',event=>{state.chapter=Number(event.target.value);state.limit=24;renderWords();});
  $('#sort').addEventListener('change',event=>{state.sort=event.target.value;state.limit=24;renderWords();});
  $('#load-more').addEventListener('click',()=>{state.limit+=24;renderWords(true);});
  $('#reset-filters').addEventListener('click',()=>{setView('all');$('#search').focus();});
  $('#ui-language').addEventListener('change',event=>{state.lang=event.target.value;localize();persist();});
  $('#theme-toggle').addEventListener('click',()=>{state.theme=state.theme==='light'?'dark':'light';applyTheme();persist();});
  $('#translation-toggle').addEventListener('click',()=>{state.hidden=!state.hidden;state.revealed.clear();renderWords();persist();});
  for(const layout of ['grid','list'])$('#'+layout+'-view').addEventListener('click',()=>{state.layout=layout;renderWords();persist();});
  $('#daily-listen').addEventListener('click',event=>speak(dailyWord,event.currentTarget));
  $('#word-grid').addEventListener('click',event=>{
    const button=event.target.closest('button[data-action]');if(!button)return;
    const article=button.closest('[data-id]'),w=words[Number(article.dataset.id)-1], action=button.dataset.action;
    if(action==='listen'){speak(w,button);return;}
    if(action==='reveal'){state.revealed.add(w.id);article.outerHTML=card(w,0);return;}
    const field=action==='save'?'saved':'learned',exists=state[field].has(w.id);
    setWordStatus([w.id],field,!exists);
    toast(t(action==='save'?(exists?'unsavedToast':'savedToast'):(exists?'unlearnedToast':'learnedToast')));
    if(state.view===field)renderWords();else {article.outerHTML=card(w,0);const nextButton=$(`[data-id="${w.id}"] [data-action="${action}"]`);if(nextButton)nextButton.focus({preventScroll:true});}
  });

  function shuffled(list){const result=[...list];for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;}
  function startPractice(){let pool=filteredWords();if(!pool.length){toast(t('noPractice'));return;}const fresh=pool.filter(w=>!state.learned.has(w.id)),known=pool.filter(w=>state.learned.has(w.id));session={words:[...shuffled(fresh),...shuffled(known)].slice(0,20),index:0,known:0,revealed:false};renderPractice();if(!$('#practice-dialog').open)$('#practice-dialog').showModal();}
  function renderPractice(){
    const target=$('#practice-content');
    if(session.index>=session.words.length){target.innerHTML=`<div class="session-done"><span>${icon('checkCircle')}</span><h2>${esc(t('practiceDone'))}</h2><p>${esc(t('practiceSummary',session.known,session.words.length))}</p><button class="practice-button" id="practice-again">${icon('rotate')}<span>${esc(t('practiceAgain'))}</span></button><button class="secondary-button" id="practice-back">${esc(t('backDictionary'))}</button><p class="practice-note">${esc(t('localNotice'))}</p></div>`;$('#practice-again').addEventListener('click',startPractice);$('#practice-back').addEventListener('click',closePractice);return;}
    const w=session.words[session.index];
    target.innerHTML=`<div class="practice-progress-head"><span>${esc(t('practiceCount',session.index+1,session.words.length))}</span><span>${Math.round(session.index/session.words.length*100)}%</span></div><div class="practice-track"><div style="width:${session.index/session.words.length*100}%"></div></div><button class="flash-card ${session.revealed?'revealed':''}" id="flash-card" aria-label="${esc(t(session.revealed?'showTranslations':'reveal'))}"><span class="flash-word" lang="en">${esc(w.en)}</span><span class="flash-pron">${esc(w.pron)}</span>${session.revealed?`<span class="flash-translations"><span class="translation-row"><span class="lang-label">RU</span><span lang="ru">${esc(w.ru)}</span></span><span class="translation-row" data-lang="tj"><span class="lang-label">TJ</span><span lang="tg">${esc(w.tj)}</span></span></span>`:`<span class="flash-hint">${icon('rotate')}${esc(t('practiceHint'))}</span>`}</button><button class="practice-listen" id="practice-listen">${icon('volume')}${esc(t('listen'))}</button><div class="practice-buttons"><button id="practice-no" ${session.revealed?'':'disabled'}>${icon('rotate')}${esc(t('again'))}</button><button id="practice-yes" ${session.revealed?'':'disabled'}>${icon('check')}${esc(t('practiceKnow'))}</button></div><p class="practice-note">${t('practiceNote')}</p>`;
    $('#flash-card').addEventListener('click',()=>{session.revealed=!session.revealed;renderPractice();$('#flash-card').focus({preventScroll:true});});
    $('#practice-listen').addEventListener('click',event=>speak(w,event.currentTarget));
    $('#practice-no').addEventListener('click',()=>answerPractice(false));$('#practice-yes').addEventListener('click',()=>answerPractice(true));
  }
  function answerPractice(known){if(!session||!session.revealed||session.index>=session.words.length)return;const w=session.words[session.index];if(known)session.known++;setWordStatus([w.id],'learned',known);session.index++;session.revealed=false;renderWords();renderPractice();const next=$('#flash-card')||$('#practice-again');if(next)next.focus({preventScroll:true});}
  function closePractice(){$('#practice-dialog').close();if('speechSynthesis' in window)window.speechSynthesis.cancel();}
  ['#nav-practice','#practice-start','#mobile-practice'].forEach(selector=>$(selector).addEventListener('click',startPractice));
  $('#close-practice').addEventListener('click',closePractice);
  $('#practice-dialog').addEventListener('click',event=>{if(event.target===$('#practice-dialog')){const r=event.target.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closePractice();}});
  $('#practice-dialog').addEventListener('close',()=>{if('speechSynthesis' in window)window.speechSynthesis.cancel();});
  document.addEventListener('keydown',event=>{
    const editing=/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
    if(event.key==='/'&&!editing&&!$('#practice-dialog').open){event.preventDefault();$('#search').focus();$('#dictionary').scrollIntoView({block:'start'});}
    if($('#practice-dialog').open&&!editing&&session&&session.index<session.words.length){if(event.key==='1')answerPractice(false);if(event.key==='2')answerPractice(true);}
  });
  window.addEventListener('storage',event=>{if(event.key!==storageKey)return;try{const data=JSON.parse(event.newValue||'{}');state.saved=asIds(data.saved);state.learned=asIds(data.learned);updateProgress();renderWords();}catch(_){}});
  if(document.modelContext?.registerTool){
    const lifecycle=new AbortController();
    const register=tool=>{try{Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch(_){}};
    register({name:'search_dictionary',title:'Search LUGAT dictionary',description:'Show matching English, Russian or Tajik words in the visible dictionary. Changes the active view and search; does not save or mark words.',inputSchema:{type:'object',properties:{query:{type:'string',maxLength:300},part:{type:'integer',minimum:0,maximum:50}},required:['query'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:true},execute(input){if(!input||typeof input.query!=='string'||input.query.length>300||Object.keys(input).some(k=>!['query','part'].includes(k))||(input.part!==undefined&&(!Number.isInteger(input.part)||input.part<0||input.part>50)))throw new Error('Expected query text and an optional part from 0 to 50.');setView('all');state.query=input.query;state.chapter=input.part||0;$('#search').value=input.query;$('#chapter').value=state.chapter;renderWords();const result=filteredWords();return {total:result.length,words:result.slice(0,20).map(w=>({...w,saved:state.saved.has(w.id),learned:state.learned.has(w.id)}))};}});
    register({name:'set_word_status',title:'Save or mark LUGAT words',description:'Set saved or learned status for a batch of dictionary words on this device, updating the visible dictionary and progress.',inputSchema:{type:'object',properties:{ids:{type:'array',items:{type:'integer',minimum:1,maximum:1000},minItems:1,maxItems:100},status:{type:'string',enum:['saved','learned']},enabled:{type:'boolean'}},required:['ids','status','enabled'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||!Array.isArray(input.ids)||!input.ids.length||input.ids.length>100||input.ids.some(id=>!Number.isInteger(id)||!validIds.has(id))||!['saved','learned'].includes(input.status)||typeof input.enabled!=='boolean'||Object.keys(input).some(k=>!['ids','status','enabled'].includes(k)))throw new Error('Expected valid word ids, saved or learned status, and enabled boolean.');setWordStatus(input.ids,input.status,input.enabled);renderWords();return {words:[...new Set(input.ids)].map(id=>({id,saved:state.saved.has(id),learned:state.learned.has(id)})),savedCount:state.saved.size,learnedCount:state.learned.size};}});
    window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
  }
  applyTheme();localize();
})();
