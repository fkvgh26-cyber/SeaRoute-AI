(() => {
  "use strict";
  const STORAGE_KEYS = { trip: "searoute.trip.v2", checklist: "searoute.checklist.v2", language: "searoute.language.v2" };
  const translations = {
    en: {
      skip:"Skip to content",brandTag:"COASTAL SAFETY COMPANION",navTools:"AI Tools",navSafety:"Safety",navAbout:"About",
      heroEyebrow:"BUILT FOR COASTAL COMMUNITIES",heroTitle:'Smarter preparation.<br><span class="gradient-text">Safer fishing.</span>',heroLead:"A practical digital companion for planning a fishing trip, preparing safety equipment, and thinking through risks — in English or Bangla.",exploreTools:"Explore tools",reviewSafety:"Review safety guide",trustLine:"Clear limits · Privacy-aware prototype · Human judgment first",prototypeLabel:"PROTOTYPE",oceanCardTitle:"Plan before departure",oceanCardSub:"Use official warnings for real decisions",chipCheckTitle:"Ready check",chipCheckSub:"Equipment & contacts",chipPlanTitle:"Trip planner",chipPlanSub:"Your plan, saved locally",
      statLanguages:"Languages",statTools:"Interactive tools",statFakeData:"Live forecast claims",statHuman:"Human decision required",toolsEyebrow:"YOUR WORKSPACE",toolsTitle:"Tools for a more prepared trip",toolsLead:"These tools work in your browser. They help organize decisions but do not provide live weather, GPS routing, or verified marine advice.",toolOneKicker:"01 / PLAN",toolTwoKicker:"02 / PREPARE",toolThreeKicker:"03 / ASK",toolFourKicker:"04 / RECORD",tripTitle:"Fishing trip planner",tripDesc:"Create a simple trip brief with crew, departure plan, communication contact, and return check-in.",openPlanner:"Open trip planner",checklistTitle:"Safety checklist",checklistDesc:"Check essential equipment and see how many items you have confirmed before departure.",openChecklist:"Open checklist",assistantTitle:"Safety thinking assistant",assistantDesc:"Ask a safety-preparation question. A transparent, rule-based helper gives general guidance, not live AI forecasts.",openAssistant:"Ask assistant",notesTitle:"Trip notes & summary",notesDesc:"Save your trip brief on this device and generate a plain-text summary to share with your crew.",openSaved:"View saved plan",
      plannerEyebrow:"TOOL 01",plannerTitle:"Build your trip brief",plannerLead:"Enter the plan you already intend to follow. This form does not calculate a safe route or recommend sailing conditions.",tripNameLabel:"Trip name",tripNamePlaceholder:"e.g. Morning fishing trip",departureLabel:"Planned departure point",departurePlaceholder:"e.g. Local landing site",crewLabel:"Crew count",contactLabel:"Shore contact name or role",contactPlaceholder:"e.g. Family contact",checkinLabel:"Agreed check-in time",checkinPlaceholder:"e.g. 4:00 PM (local time)",commsLabel:"Communication method",notesLabel:"Extra notes (optional)",notesPlaceholder:"Crew arrangements, planned return, backup contact…",saveTrip:"Save trip plan on this device",localSaveHint:"Saved only in this browser when local storage is available.",tripSaved:"Trip plan saved on this device.",tripSaveError:"Could not save in this browser. Check browser storage settings.",
      checklistLead:"Mark each item only after someone has physically checked it. A completed checklist cannot guarantee safety.",readinessProgress:"Checklist progress",resetChecklist:"Reset checklist",checklistLocalHint:"Checklist state is stored locally on this device.",itemsConfirmed:"confirmed",checkResetMsg:"Checklist reset.",assistantLead:"This version uses transparent keyword-based guidance in your browser. It is not a connected generative AI service and cannot assess actual sea conditions.",assistantWelcome:"Hello, I’m the SeaRoute safety helper.",assistantWelcomeSub:"Ask about trip preparation, equipment, communication, or emergency planning.",promptEquipment:"Equipment checklist",promptContact:"Shore contact plan",promptWeather:"Weather warnings",assistantStarter:"I can help you organize a checklist. I cannot tell you whether it is safe to go to sea. Always follow official warnings and qualified local guidance.",assistantInputLabel:"Ask a safety preparation question",assistantPlaceholder:"Ask a safety-preparation question…",sendQuestion:"Ask",assistantPrivacy:"Questions are processed in this page only; this demo does not send them to an AI provider.",emptyQuestion:"Please type a question first.",savedEyebrow:"TOOL 04",savedTitle:"Saved trip plan",savedLead:"Review, copy, or remove the trip plan stored in this browser.",emptyTitle:"No saved trip yet",emptyText:"Create a trip plan above and save it to see the summary here.",createPlanLink:"Create a trip plan →",savedLocally:"SAVED LOCALLY",downloadSummary:"Download text summary",deletePlan:"Delete saved plan",tripDeleted:"Saved plan deleted.",noPlanToDownload:"There is no saved plan to download.",safetyEyebrow:"IMPORTANT LIMITATION",safetyTitle:"This prototype is not a navigation authority.",safetyText:"It does not connect to live marine weather, tides, GPS, charts, vessel tracking, or emergency services. Do not use it to choose a route or decide whether to depart. Check official Bangladesh weather and maritime warnings, follow local authorities, and use qualified human judgment.",aboutEyebrow:"WHY SEAROUTE AI",aboutTitle:"Designed around people, not just technology.",aboutText:"SeaRoute AI is an early-stage concept for coastal fishing communities. The goal is to make trip preparation and safety information easier to organize, including for users who prefer Bangla.",ethicsText:"Responsible use means being honest about uncertainty, protecting personal information, testing with local fishers, and keeping safety-critical decisions with people and official sources.",pillAccessible:"Accessible",pillTransparent:"Transparent",pillHuman:"Human-led",pillPrivacy:"Privacy-aware",footerTag:"SAFER PREPARATION, BETTER INFORMED",footerNote:"Prototype only · No live marine data · Use official safety guidance",backTop:"Back to top ↑",
      labelTrip:"Trip",labelDeparture:"Departure point",labelCrew:"Crew count",labelContact:"Shore contact",labelCheckin:"Check-in time",labelComms:"Communication",labelNotes:"Notes",noNotes:"None provided",chatSafety:"For safety, I can only provide general preparation guidance. Check current official warnings and follow qualified local authorities. Do not use this demo to decide whether to sail.",
      answerWeather:"Do not rely on this demo to interpret actual conditions. Check the latest official marine weather forecast and warnings from the relevant Bangladesh authorities before departure. If a warning or uncertainty raises concern, follow official instructions and postpone or seek qualified local advice. I cannot verify current conditions.",
      answerGear:"Use a physical check with the vessel operator and crew. Typical preparation includes properly fitting life jackets for everyone, working communication equipment and backup power, first-aid supplies, drinking water and food, fuel and vessel checks, navigation equipment suitable for your vessel, and a clear emergency contact plan. Follow local rules and vessel-specific procedures.",
      answerContact:"Agree on a shore contact before departure. Share the planned area and expected return/check-in time, crew count, vessel identification, and how you will communicate. Agree what the contact should do if you miss the check-in, including who to notify through local official procedures. Avoid sharing sensitive personal information unnecessarily.",
      answerEmergency:"Prioritize immediate safety and follow the vessel operator's emergency procedures. Use available communication equipment to contact the relevant local emergency or maritime authority. Give your vessel identity, location if known, number of people, and nature of the emergency. Do not rely on this webpage for emergency dispatch; use official local emergency channels.",
      answerPlan:"Write down the departure point, crew count, responsible shore contact, agreed check-in time, communication method, and expected return plan. Brief every crew member, physically check equipment, and review official warnings immediately before departure. This tool stores notes; it does not approve a trip or calculate a route.",
      answerGeneric:"I can help with general trip preparation, equipment, shore-contact planning, and what to do about official warnings. I cannot access live marine conditions, calculate a safe route, or provide emergency dispatch. Try asking: “What equipment should we check?” or “What should our shore contact know?”",
      userPrefix:"You asked: "
    },
    bn: {
      skip:"মূল কনটেন্টে যান",brandTag:"উপকূলীয় নিরাপত্তা সহায়ক",navTools:"এআই টুলস",navSafety:"নিরাপত্তা",navAbout:"পরিচিতি",
      heroEyebrow:"উপকূলীয় কমিউনিটির জন্য তৈরি",heroTitle:'আরও ভালো প্রস্তুতি।<br><span class="gradient-text">নিরাপদ মাছ ধরা।</span>',heroLead:"মাছ ধরার যাত্রা পরিকল্পনা, নিরাপত্তা সরঞ্জাম প্রস্তুত এবং ঝুঁকি নিয়ে ভাবার জন্য একটি ব্যবহারিক ডিজিটাল সহায়ক — বাংলা বা ইংরেজিতে।",exploreTools:"টুলস দেখুন",reviewSafety:"নিরাপত্তা নির্দেশনা",trustLine:"স্পষ্ট সীমাবদ্ধতা · গোপনীয়তা-সচেতন প্রোটোটাইপ · মানুষের সিদ্ধান্ত আগে",prototypeLabel:"প্রোটোটাইপ",oceanCardTitle:"যাত্রার আগে পরিকল্পনা করুন",oceanCardSub:"বাস্তব সিদ্ধান্তে সরকারি সতর্কতা ব্যবহার করুন",chipCheckTitle:"প্রস্তুতি যাচাই",chipCheckSub:"সরঞ্জাম ও যোগাযোগ",chipPlanTitle:"যাত্রা পরিকল্পনা",chipPlanSub:"আপনার পরিকল্পনা ডিভাইসে সংরক্ষিত",
      statLanguages:"ভাষা",statTools:"ইন্টারঅ্যাকটিভ টুল",statFakeData:"লাইভ পূর্বাভাসের দাবি",statHuman:"মানুষের সিদ্ধান্ত জরুরি",toolsEyebrow:"আপনার কর্মক্ষেত্র",toolsTitle:"আরও প্রস্তুত যাত্রার জন্য টুলস",toolsLead:"এই টুলগুলো আপনার ব্রাউজারে কাজ করে। এগুলো পরিকল্পনা সাজাতে সাহায্য করে, কিন্তু লাইভ আবহাওয়া, জিপিএস রুট বা যাচাইকৃত সামুদ্রিক পরামর্শ দেয় না।",toolOneKicker:"০১ / পরিকল্পনা",toolTwoKicker:"০২ / প্রস্তুতি",toolThreeKicker:"০৩ / প্রশ্ন",toolFourKicker:"০৪ / নথি",tripTitle:"মাছ ধরার যাত্রা পরিকল্পনা",tripDesc:"দল, যাত্রার স্থান, যোগাযোগের ব্যক্তি এবং ফেরার চেক-ইনসহ সহজ পরিকল্পনা তৈরি করুন।",openPlanner:"পরিকল্পনা খুলুন",checklistTitle:"নিরাপত্তা চেকলিস্ট",checklistDesc:"প্রয়োজনীয় সরঞ্জাম যাচাই করুন এবং কতগুলো বিষয় নিশ্চিত হয়েছে দেখুন।",openChecklist:"চেকলিস্ট খুলুন",assistantTitle:"নিরাপত্তা সহায়ক",assistantDesc:"নিরাপত্তা প্রস্তুতি নিয়ে প্রশ্ন করুন। এই নিয়মভিত্তিক সহায়ক সাধারণ নির্দেশনা দেয়, লাইভ এআই পূর্বাভাস নয়।",openAssistant:"সহায়ককে জিজ্ঞাসা করুন",notesTitle:"যাত্রার নোট ও সারাংশ",notesDesc:"এই ডিভাইসে পরিকল্পনা সংরক্ষণ করুন এবং দলের সঙ্গে ভাগ করার জন্য টেক্সট সারাংশ তৈরি করুন।",openSaved:"সংরক্ষিত পরিকল্পনা দেখুন",
      plannerEyebrow:"টুল ০১",plannerTitle:"যাত্রার পরিকল্পনা তৈরি করুন",plannerLead:"আপনার নির্ধারিত পরিকল্পনা লিখুন। এই ফর্ম নিরাপদ রুট গণনা করে না বা সমুদ্রে যাওয়ার উপযুক্ত সময় বলে না।",tripNameLabel:"যাত্রার নাম",tripNamePlaceholder:"যেমন: সকালের মাছ ধরার যাত্রা",departureLabel:"নির্ধারিত যাত্রার স্থান",departurePlaceholder:"যেমন: স্থানীয় ঘাট",crewLabel:"দলের সদস্য সংখ্যা",contactLabel:"তীরের যোগাযোগ ব্যক্তির নাম বা পরিচয়",contactPlaceholder:"যেমন: পরিবারের সদস্য",checkinLabel:"সম্মত চেক-ইন সময়",checkinPlaceholder:"যেমন: বিকেল ৪টা",commsLabel:"যোগাযোগের মাধ্যম",notesLabel:"অতিরিক্ত নোট (ঐচ্ছিক)",notesPlaceholder:"দলের ব্যবস্থা, ফেরার পরিকল্পনা, বিকল্প যোগাযোগ…",saveTrip:"এই ডিভাইসে পরিকল্পনা সংরক্ষণ করুন",localSaveHint:"ব্রাউজার স্টোরেজ চালু থাকলে শুধু এই ব্রাউজারে সংরক্ষিত হবে।",tripSaved:"এই ডিভাইসে যাত্রার পরিকল্পনা সংরক্ষিত হয়েছে।",tripSaveError:"ব্রাউজারে সংরক্ষণ করা যায়নি। স্টোরেজ সেটিংস পরীক্ষা করুন।",
      checklistLead:"কেউ সরাসরি পরীক্ষা করার পরই প্রতিটি বিষয় চিহ্নিত করুন। সম্পূর্ণ চেকলিস্টও নিরাপত্তার নিশ্চয়তা নয়।",readinessProgress:"চেকলিস্টের অগ্রগতি",resetChecklist:"চেকলিস্ট রিসেট করুন",checklistLocalHint:"চেকলিস্টের অবস্থা এই ডিভাইসে সংরক্ষিত হয়।",itemsConfirmed:"টি নিশ্চিত",checkResetMsg:"চেকলিস্ট রিসেট করা হয়েছে।",assistantLead:"এই সংস্করণে ব্রাউজারের ভেতরে স্বচ্ছ কীওয়ার্ডভিত্তিক নির্দেশনা ব্যবহার করা হয়। এটি সংযুক্ত জেনারেটিভ এআই নয় এবং বাস্তব সমুদ্রের অবস্থা যাচাই করতে পারে না।",assistantWelcome:"হ্যালো, আমি SeaRoute নিরাপত্তা সহায়ক।",assistantWelcomeSub:"যাত্রার প্রস্তুতি, সরঞ্জাম, যোগাযোগ বা জরুরি পরিকল্পনা সম্পর্কে প্রশ্ন করুন।",promptEquipment:"সরঞ্জাম চেকলিস্ট",promptContact:"তীরের যোগাযোগ পরিকল্পনা",promptWeather:"আবহাওয়ার সতর্কতা",assistantStarter:"আমি চেকলিস্ট সাজাতে সাহায্য করতে পারি। সমুদ্রে যাওয়া নিরাপদ কি না বলতে পারি না। সরকারি সতর্কতা ও যোগ্য স্থানীয় নির্দেশনা অনুসরণ করুন।",assistantInputLabel:"নিরাপত্তা প্রস্তুতি সম্পর্কে প্রশ্ন করুন",assistantPlaceholder:"নিরাপত্তা প্রস্তুতি নিয়ে প্রশ্ন লিখুন…",sendQuestion:"জিজ্ঞাসা করুন",assistantPrivacy:"প্রশ্ন এই পৃষ্ঠাতেই প্রক্রিয়া হয়; এই ডেমো কোনো এআই সেবাদাতার কাছে প্রশ্ন পাঠায় না।",emptyQuestion:"অনুগ্রহ করে আগে প্রশ্ন লিখুন।",savedEyebrow:"টুল ০৪",savedTitle:"সংরক্ষিত যাত্রা পরিকল্পনা",savedLead:"এই ব্রাউজারে সংরক্ষিত পরিকল্পনা দেখুন, ডাউনলোড করুন বা মুছুন।",emptyTitle:"এখনো কোনো পরিকল্পনা নেই",emptyText:"উপরে পরিকল্পনা তৈরি করে সংরক্ষণ করলে এখানে সারাংশ দেখা যাবে।",createPlanLink:"পরিকল্পনা তৈরি করুন →",savedLocally:"ডিভাইসে সংরক্ষিত",downloadSummary:"টেক্সট সারাংশ ডাউনলোড",deletePlan:"সংরক্ষিত পরিকল্পনা মুছুন",tripDeleted:"সংরক্ষিত পরিকল্পনা মুছে ফেলা হয়েছে।",noPlanToDownload:"ডাউনলোড করার মতো কোনো পরিকল্পনা নেই।",safetyEyebrow:"গুরুত্বপূর্ণ সীমাবদ্ধতা",safetyTitle:"এই প্রোটোটাইপ নেভিগেশন কর্তৃপক্ষ নয়।",safetyText:"এটি লাইভ সামুদ্রিক আবহাওয়া, জোয়ার, জিপিএস, নৌ-মানচিত্র, নৌযান ট্র্যাকিং বা জরুরি সেবার সঙ্গে সংযুক্ত নয়। রুট নির্বাচন বা যাত্রা শুরু করার সিদ্ধান্তে এটি ব্যবহার করবেন না। বাংলাদেশের সরকারি আবহাওয়া ও সামুদ্রিক সতর্কতা যাচাই করুন, স্থানীয় কর্তৃপক্ষের নির্দেশনা অনুসরণ করুন এবং যোগ্য মানুষের বিচার-বিবেচনা ব্যবহার করুন।",aboutEyebrow:"কেন SeaRoute AI",aboutTitle:"শুধু প্রযুক্তি নয়, মানুষের কথা ভেবে তৈরি।",aboutText:"SeaRoute AI উপকূলীয় জেলে কমিউনিটির জন্য প্রাথমিক পর্যায়ের একটি ধারণা। বাংলা পছন্দ করেন এমন ব্যবহারকারীদেরসহ সবার জন্য যাত্রার প্রস্তুতি ও নিরাপত্তার তথ্য সাজানো সহজ করাই লক্ষ্য।",ethicsText:"দায়িত্বশীল ব্যবহারের অর্থ হলো অনিশ্চয়তা সম্পর্কে সৎ থাকা, ব্যক্তিগত তথ্য সুরক্ষিত রাখা, স্থানীয় জেলেদের সঙ্গে পরীক্ষা করা এবং নিরাপত্তাসংক্রান্ত গুরুত্বপূর্ণ সিদ্ধান্ত মানুষ ও সরকারি উৎসের ওপর ছেড়ে দেওয়া।",pillAccessible:"সহজ ব্যবহার",pillTransparent:"স্বচ্ছ",pillHuman:"মানুষের সিদ্ধান্ত",pillPrivacy:"গোপনীয়তা-সচেতন",footerTag:"আরও ভালো প্রস্তুতি, আরও সচেতন সিদ্ধান্ত",footerNote:"প্রোটোটাইপ · লাইভ সামুদ্রিক তথ্য নেই · সরকারি নির্দেশনা অনুসরণ করুন",backTop:"উপরে যান ↑",
      labelTrip:"যাত্রা",labelDeparture:"যাত্রার স্থান",labelCrew:"দলের সদস্য",labelContact:"তীরের যোগাযোগ",labelCheckin:"চেক-ইন সময়",labelComms:"যোগাযোগ",labelNotes:"নোট",noNotes:"কিছু দেওয়া হয়নি",chatSafety:"নিরাপত্তার জন্য আমি শুধু সাধারণ প্রস্তুতির নির্দেশনা দিতে পারি। বর্তমান সরকারি সতর্কতা যাচাই করুন এবং যোগ্য স্থানীয় কর্তৃপক্ষের নির্দেশনা অনুসরণ করুন। সমুদ্রে যাওয়ার সিদ্ধান্তে এই ডেমোর ওপর নির্ভর করবেন না।",
      answerWeather:"বাস্তব আবহাওয়া বোঝার জন্য এই ডেমোর ওপর নির্ভর করবেন না। যাত্রার আগে বাংলাদেশের সংশ্লিষ্ট কর্তৃপক্ষের সর্বশেষ সরকারি সামুদ্রিক আবহাওয়া পূর্বাভাস ও সতর্কতা যাচাই করুন। সতর্কতা বা অনিশ্চয়তা থাকলে সরকারি নির্দেশনা অনুসরণ করুন, যাত্রা স্থগিত করুন বা যোগ্য স্থানীয় পরামর্শ নিন। আমি বর্তমান অবস্থা যাচাই করতে পারি না।",
      answerGear:"নৌযানের দায়িত্বপ্রাপ্ত ব্যক্তি ও দলের সঙ্গে সরাসরি সরঞ্জাম পরীক্ষা করুন। সাধারণ প্রস্তুতির মধ্যে সবার জন্য সঠিক মাপের লাইফ জ্যাকেট, কার্যকর যোগাযোগ সরঞ্জাম ও বিকল্প বিদ্যুৎ, প্রাথমিক চিকিৎসা সামগ্রী, পানীয় জল ও খাবার, জ্বালানি ও নৌযান পরীক্ষা, উপযুক্ত নেভিগেশন সরঞ্জাম এবং জরুরি যোগাযোগ পরিকল্পনা থাকতে পারে। স্থানীয় নিয়ম ও নৌযানের নির্দিষ্ট পদ্ধতি অনুসরণ করুন।",
      answerContact:"যাত্রার আগে তীরে একজন যোগাযোগ ব্যক্তি ঠিক করুন। পরিকল্পিত এলাকা, সম্ভাব্য ফেরার/চেক-ইন সময়, দলের সংখ্যা, নৌযানের পরিচয় এবং যোগাযোগের পদ্ধতি জানান। চেক-ইন মিস হলে স্থানীয় সরকারি পদ্ধতিতে কাকে জানাতে হবে তা ঠিক করুন। অপ্রয়োজনীয় সংবেদনশীল ব্যক্তিগত তথ্য শেয়ার করবেন না।",
      answerEmergency:"তাৎক্ষণিক নিরাপত্তাকে অগ্রাধিকার দিন এবং নৌযানের জরুরি পদ্ধতি অনুসরণ করুন। উপলব্ধ যোগাযোগ সরঞ্জাম দিয়ে সংশ্লিষ্ট স্থানীয় জরুরি বা সামুদ্রিক কর্তৃপক্ষের সঙ্গে যোগাযোগ করুন। নৌযানের পরিচয়, জানা থাকলে অবস্থান, মানুষের সংখ্যা এবং জরুরি অবস্থার ধরন জানান। জরুরি সহায়তার জন্য এই ওয়েবপেজের ওপর নির্ভর করবেন না; সরকারি স্থানীয় জরুরি মাধ্যম ব্যবহার করুন।",
      answerPlan:"যাত্রার স্থান, দলের সংখ্যা, দায়িত্বপ্রাপ্ত তীরের যোগাযোগ ব্যক্তি, সম্মত চেক-ইন সময়, যোগাযোগের মাধ্যম এবং ফেরার পরিকল্পনা লিখে রাখুন। দলের সবাইকে পরিকল্পনা বুঝিয়ে দিন, সরঞ্জাম সরাসরি পরীক্ষা করুন এবং যাত্রার ঠিক আগে সরকারি সতর্কতা দেখুন। এই টুল নোট সংরক্ষণ করে; যাত্রার অনুমোদন বা রুট গণনা করে না।",
      answerGeneric:"আমি সাধারণ যাত্রা প্রস্তুতি, সরঞ্জাম, তীরের যোগাযোগ পরিকল্পনা এবং সরকারি সতর্কতা সম্পর্কে সাহায্য করতে পারি। আমি লাইভ সামুদ্রিক অবস্থা দেখতে, নিরাপদ রুট গণনা করতে বা জরুরি সেবা পাঠাতে পারি না। যেমন জিজ্ঞাসা করতে পারেন: “কোন সরঞ্জাম পরীক্ষা করব?” বা “তীরের যোগাযোগ ব্যক্তিকে কী জানাতে হবে?”",
      userPrefix:"আপনার প্রশ্ন: "
    }
  };
  let language = "en";
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  function safeStorageGet(key) { try { return localStorage.getItem(key); } catch (_) { return null; } }
  function safeStorageSet(key, value) { try { localStorage.setItem(key, value); return true; } catch (_) { return false; } }
  function safeStorageRemove(key) { try { localStorage.removeItem(key); } catch (_) {} }
  function t(key) { return (translations[language] && translations[language][key]) || translations.en[key] || key; }
  function setLanguage(next) {
    language = next;
    document.documentElement.lang = language;
    $$("[data-i18n]").forEach(el => {
      const value = t(el.dataset.i18n);
      if (el.dataset.i18n === "heroTitle") el.innerHTML = value;
      else el.textContent = value;
    });
    $$("[data-i18n-placeholder]").forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
    $("#languageToggle").textContent = language === "en" ? "বাংলা" : "English";
    safeStorageSet(STORAGE_KEYS.language, language);
    renderChecklistProgress();
    renderSavedTrip();
    // Existing assistant messages stay as written; future responses use the selected language.
  }
  $("#languageToggle").addEventListener("click", () => setLanguage(language === "en" ? "bn" : "en"));

  $$("[data-scroll]").forEach(button => button.addEventListener("click", () => {
    const target = $(button.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }));

  const tripForm = $("#tripForm");
  tripForm.addEventListener("submit", event => {
    event.preventDefault();
    const trip = {
      name: $("#tripName").value.trim(),
      departure: $("#departure").value.trim(),
      crew: Number($("#crew").value),
      contact: $("#shoreContact").value.trim(),
      checkin: $("#checkin").value.trim(),
      comms: $("#comms").value,
      notes: $("#tripNotes").value.trim(),
      savedAt: new Date().toISOString()
    };
    if (!trip.name || !trip.departure || !trip.contact || !trip.checkin || !Number.isFinite(trip.crew) || trip.crew < 1 || trip.crew > 100) {
      $("#tripMessage").textContent = language === "en" ? "Please complete the required fields with valid values." : "প্রয়োজনীয় ঘরগুলো সঠিকভাবে পূরণ করুন।";
      return;
    }
    if (safeStorageSet(STORAGE_KEYS.trip, JSON.stringify(trip))) {
      $("#tripMessage").textContent = t("tripSaved");
      renderSavedTrip();
    } else {
      $("#tripMessage").textContent = t("tripSaveError");
    }
  });

  const checklistInputs = $$("#checklistItems input[type=checkbox]");
  function getChecklistState() {
    try { return JSON.parse(safeStorageGet(STORAGE_KEYS.checklist) || "[]"); } catch (_) { return []; }
  }
  function saveChecklistState() {
    safeStorageSet(STORAGE_KEYS.checklist, JSON.stringify(checklistInputs.filter(input => input.checked).map(input => input.value)));
    renderChecklistProgress();
  }
  const storedChecks = getChecklistState();
  checklistInputs.forEach(input => {
    input.checked = storedChecks.includes(input.value);
    input.addEventListener("change", saveChecklistState);
  });
  function renderChecklistProgress() {
    const checked = checklistInputs.filter(input => input.checked).length;
    const percent = Math.round(checked / checklistInputs.length * 100);
    $("#checkCount").textContent = language === "en" ? `${checked} of ${checklistInputs.length} ${t("itemsConfirmed")}` : `${checklistInputs.length}টির মধ্যে ${checked}টি নিশ্চিত`;
    $("#checkPercent").textContent = `${percent}%`;
    $("#progressFill").style.width = `${percent}%`;
  }
  $("#resetChecklist").addEventListener("click", () => {
    checklistInputs.forEach(input => input.checked = false);
    saveChecklistState();
    $("#savedMessage").textContent = t("checkResetMsg");
  });
  renderChecklistProgress();

  function getTrip() {
    try { return JSON.parse(safeStorageGet(STORAGE_KEYS.trip) || "null"); } catch (_) { return null; }
  }
  function renderSavedTrip() {
    const trip = getTrip();
    $("#savedEmpty").hidden = Boolean(trip);
    $("#savedDetails").hidden = !trip;
    if (!trip) return;
    $("#savedTripTitle").textContent = trip.name;
    const date = new Date(trip.savedAt);
    $("#savedTripDate").textContent = Number.isNaN(date.getTime()) ? "" : date.toLocaleString(language === "bn" ? "bn-BD" : "en-BD");
    const details = [
      [t("labelDeparture"), trip.departure],
      [t("labelCrew"), String(trip.crew)],
      [t("labelContact"), trip.contact],
      [t("labelCheckin"), trip.checkin],
      [t("labelComms"), trip.comms],
      [t("labelNotes"), trip.notes || t("noNotes")]
    ];
    const dl = $("#tripDetails");
    dl.replaceChildren();
    details.forEach(([label, value]) => {
      const div = document.createElement("div");
      const dt = document.createElement("dt"); dt.textContent = label;
      const dd = document.createElement("dd"); dd.textContent = value;
      div.append(dt, dd); dl.append(div);
    });
  }
  renderSavedTrip();
  $("#deleteTrip").addEventListener("click", () => {
    safeStorageRemove(STORAGE_KEYS.trip);
    renderSavedTrip();
    $("#savedMessage").textContent = t("tripDeleted");
  });
  $("#downloadSummary").addEventListener("click", () => {
    const trip = getTrip();
    if (!trip) { $("#savedMessage").textContent = t("noPlanToDownload"); return; }
    const content = [
      "SeaRoute AI — Trip preparation summary",
      "Prototype only: not a route approval or navigation instruction.",
      `${t("labelTrip")}: ${trip.name}`,
      `${t("labelDeparture")}: ${trip.departure}`,
      `${t("labelCrew")}: ${trip.crew}`,
      `${t("labelContact")}: ${trip.contact}`,
      `${t("labelCheckin")}: ${trip.checkin}`,
      `${t("labelComms")}: ${trip.comms}`,
      `${t("labelNotes")}: ${trip.notes || t("noNotes")}`,
      "",
      "Check current official marine warnings. Follow local authorities and qualified human judgment."
    ].join("\n");
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = "searoute-trip-summary.txt";
    document.body.append(link); link.click(); link.remove(); URL.revokeObjectURL(url);
  });

  function answerForQuestion(question) {
    const q = question.toLocaleLowerCase().replace(/[?!.,؛،。]+/g, " ").replace(/\\s+/g, " ").trim();
    const has = (...words) => words.some(word => q.includes(word));

    // Emergency and weather topics take priority over general planning keywords.
    if (has("emergency", "distress", "rescue", "accident", "man overboard", "ডুবে", "জরুরি", "বিপদ", "উদ্ধার", "দুর্ঘটনা", "মানুষ পানিতে")) return t("answerEmergency");
    if (has("weather", "forecast", "storm", "cyclone", "wind", "wave", "rough sea", "high wave", "rain", "warning", "sea condition", "আবহাওয়া", "পূর্বাভাস", "ঝড়", "ঘূর্ণিঝড়", "বাতাস", "ঢেউ", "সমুদ্র উত্তাল", "বৃষ্টি", "সতর্কতা")) return t("answerWeather");
    if (has("contact", "shore", "family", "check-in", "check in", "late return", "overdue", "যোগাযোগ", "তীর", "পরিবার", "চেক-ইন", "ফিরতে দেরি")) return t("answerContact");
    if (has("equipment", "gear", "life jacket", "lifejacket", "first aid", "fuel", "boat check", "radio", "water to carry", "সরঞ্জাম", "লাইফ জ্যাকেট", "প্রাথমিক চিকিৎসা", "জ্বালানি", "নৌযান", "রেডিও", "পানি সঙ্গে")) return t("answerGear");
    if (has("plan", "trip", "departure", "return", "route", "before leaving", "before departure", "যাত্রা", "পরিকল্পনা", "রুট", "ফেরা", "রওনা")) return t("answerPlan");
    return t("answerGeneric");
  }
  function addChatMessage(text, role) {
    const message = document.createElement("div");
    message.className = `chat-message ${role}`;
    message.textContent = text;
    $("#chatLog").append(message);
    $("#chatLog").scrollTop = $("#chatLog").scrollHeight;
  }
  $("#assistantForm").addEventListener("submit", event => {
    event.preventDefault();
    const input = $("#assistantInput");
    const question = input.value.trim();
    if (!question) {
      input.focus();
      return;
    }
    addChatMessage(question, "user");
    addChatMessage(answerForQuestion(question), "bot");
    input.value = "";
    input.focus();
  });
  $$(".prompt-chip").forEach(button => button.addEventListener("click", () => {
    $("#assistantInput").value = button.dataset.prompt;
    $("#assistantForm").requestSubmit();
  }));

  // Restore the saved language only after checklist and trip UI initialization.
  // Otherwise a saved Bangla preference can call renderChecklistProgress()
  // before checklistInputs has been initialized and stop the whole app.
  const savedLanguage = safeStorageGet(STORAGE_KEYS.language);
  if (savedLanguage === "bn") setLanguage("bn");
})();
