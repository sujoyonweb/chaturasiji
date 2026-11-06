const padsData = [
  {
    id: 0,
    title: { hi: "मंगलाचरण", en: "Maṅgalācaraṇa", bn: "মঙ্গলাচরণ" },
    hi: `निगम अगोचर बात कहा कहौं अतिहि अनौखी चोखी ते चोखी ।
उभय मीत की प्रीति-रीति छबि देखि-देखि,
वृन्दावन हुलसत हुलसावत ॥
जल-तरंगवत् गौर-श्याम विलसत विलसावत ।
ललितादिक निज सहचरी, निरखि निरखि बलि जात नित ॥
चौरासी हित पद कहे, चतुरन कौ यह परम वित ॥`,
    en: `nigama agōcara bāta kahā kahauṁ atihi anaukhī cōkhī tē cōkhī ।
ubhaya mīta kī prīti-rīti chabi dēkhi-dēkhi,
vr̥ndāvana hulasata hulasāvata ॥
jala-taraṅgavat gaura-śyāma vilasata vilasāvata ।
lalitādika nija sahacarī, nirakhi nirakhi bali jāta nita ॥
caurāsī hita pada kahē, caturana kau yaha parama vita ॥`,
    bn: `নিগম অগোচর বাত কহা কহৌঁ অতিহি অনৌখী চোখী তে চোখী ।
উভয় মীত কী প্রীতি-রীতি ছবি দেখি-দেখি,
বৃন্দাবন হুলসত হুলসাবত ॥
জল-তরঙ্গবৎ গৌর-শ্যাম বিলসত বিলসাবত ।
ললিতাদিক নিজ সহচরী, নিরখি নিরখি বলি জাত নিত ॥
চৌরাসী হিত পদ কহে, চতুরন কৌ যহ পরম বিত ॥`
  },
  {
    id: 1,
    title: { hi: "पद १", en: "Pad 1", bn: "পদ ১" },
    hi: `जोई-जोई प्यारौ करै सोई मोहि भावै,
भावै मोहि जोई सोई-सोई करें प्यारे ।
मोकों तौ भावती ठौर प्यारे के नैनन में,
प्यारौ भयौ चाहै मेरे नैंनन के तारे ॥
मेरे तन मन प्राण हूँ ते प्रीतम प्रिय,
अपने कोटिक प्राण प्रीतम मोसों हारे ।
जै श्रीहित हरिवंश हंस-हंसिनी साँवल - गौर,
कहौ कौन करै जल-तरंगनि न्यारे ॥`,
    en: `jōī-jōī pyārau karai sōī mōhi bhāvai,
bhāvai mōhi jōī sōī-sōī karaiṁ pyārē ।
mōkōṁ tau bhāvatī ṭhaura pyārē kē nainana mēṁ,
pyārau bhayau cāhai mērē naiṁnana kē tārē ॥
mērē tana mana prāṇa hūm̐ tē prītama priya,
apanē kōṭika prāṇa prītama mōsōṁ hārē ।
jai śrīhita harivaṁśa haṁsa-haṁsinī sām̐vala - gaura,
kahau kauna karai jala-taraṅgani nyārē ॥`,
    bn: `জোই-জোই প্যারৌ করৈ সোই মোহি ভাবৈ,
ভাবৈ মোহি জোই সোই-সোই করৈঁ প্যারে ।
মোকোঁ তৌ ভাবতী ঠৌর প্যারে কে নৈনন মেঁ,
প্যারৌ ভয়ৌ চাহৈ মেরে নৈঁনন কে তারে ॥
মেরে তন মন প্রাণ হূঁ তে প্রীতম প্রিয়,
অপনে কোটিক প্রাণ প্রীতম মোসোঁ হারে ।
জৈ শ্রীহিত হরিবংশ হংস-হংসিনী সাঁবল - গৌর,
কহৌ কৌন করৈ জল-তরঙ্গনি ন্যারে ॥`
  },
  {
    id: 2,
    title: { hi: "पद २", en: "Pad 2", bn: "পদ ২" },
    hi: `प्यारे बोली भामिनी आजु नीकी जामिनी,
भेंट नवीन मेघ सौं दामिनी ॥
मोहन रसिक-राइरी माई, तासौं जु –
मान करै, ऐसी कौन कामिनी ।
जै श्रीहित हरिवंश श्रवण सुनत प्यारी,
राधिकारमण सौं मिली गज-गामिनी ॥`,
    en: `pyārē bōlī bhāminī āju nīkī jāminī,
bhēṁṭa navīna mēgha sauṁ dāminī ॥
mōhana rasika-rāirī māī, tāsauṁ ju –
māna karai, aisī kauna kāminī ।
jai śrīhita harivaṁśa śravaṇa sunata pyārī,
rādhāramaṇa sauṁ milī gaja-gāminī ॥`,
    bn: `প্যারে বোলী ভামিনী আজু নীকী জামিনী,
ভেঁট নবীন মেঘ সৌঁ দামিনী ॥
মোহন রসিক-রাইরী মাঈ, তাসৌঁ জু –
মান করৈ, ঐসী কৌন কামিনী ।
জৈ শ্রীহিত হরিবংশ শ্রবণ সুনত প্যারী,
রাধিকারমণ সৌঁ মিলী গজ-গামিনী ॥`
  },
  {
    id: 3,
    title: { hi: "पद ३", en: "Pad 3", bn: "পদ ৩" },
    hi: `प्रात समय दोऊ रस लंपट,
सुरत- जुद्ध जय जुत अति फूल ।
श्रम वारिज घनविन्दु वदन पर,
भूषण अंगहि अंग विकूल ॥
कछु रह्यौ तिलक सिथिल अलकावलि,
वदन कमल मानौं अलि भूल ।
जै श्रीहित हरिवंश मदन-रंग रँगि रहे,
नैंन-बैंन कटि सिथिल दुकूल ॥`,
    en: `prāta samaya dōū rasa lampaṭa,
surata- juddha jaya juta ati phūla ।
śrama vārija ghanavindu vadana para,
bhūṣaṇa aṅgahi aṅga vikūla ॥
kachu rahyau tilaka sithila alakāvali,
vadana kamala mānauṁ ali bhūla ।
jai śrīhita harivaṁśa madana-raṅga raṅgi rahē,
naiṁna-baiṁna kaṭi sithila dukūla ॥`,
    bn: `প্রাত সময় দোঊ রস লম্পট,
সুরত- জুদ্ধ জয় জুত অতি ফুল ।
শ্রম বারিজ ঘনবিন্দু বদন পর,
ভূষণ অঙ্গহি অঙ্গ বিকূল ॥
কছু রহ্যৌ তিলক সিথিল অলকাবলি,
বদন কমল মানৌঁ অলি ভূল ।
জৈ শ্রীহিত হরিবংশ মদন-রঙ্গ রঙ্গি রহে,
নৈঁন-বৈঁন কটি সিথিল দুকূল ॥`
  },
  {
    id: 4,
    title: { hi: "पद ४", en: "Pad 4", bn: "পদ 8" },
    hi: `आजु तौ जुवति तेरौ, वदन आनन्द भर्यो,
पिय के संगम के सूचत सुख चैंन ।
आलस वलित बोल, सुरंग रँगे कपोल,
विथकित अरुण उनींदे दोऊ नैंन ॥
रुचिर तिलक लेश किरत कुसुम केश,
सिर सीमंत भूषित मानौं तैं न ।
करुणाकर उदार राखत कछु न सार,
दसन-वसन लागत जब देंन ॥
काहे कौं दुरत भीरु, पलटे प्रीतम चीर,
बस किये श्याम सिखै सत मैंन ।
गलित उरसि माल सिथिल किंकिनी जाल,
जै श्रीहित हरिवंश लता-गृह सैंन ॥`,
    en: `āju tau juvati tērau, vadana ānanda bharyō,
piya kē saṅgama kē sūcata sukha caiṁna ।
ālasa valita bōla, suraṅga raṅgē kapōla,
vithakita aruṇa unīṁdē dōū naiṁna ॥
rucira tilaka lēśa kirata kusuma kēśa,
sira sīmanta bhūṣita mānauṁ taiṁ na ।
karuṇākara udāra rākhata kachu na sāra,
dasana-vasana lāgata jaba dēṁna ॥
kāhē kauṁ durata bhīru, palaṭē prītama cīra,
basa kiyē śyāma sikhai sata maiṁna ।
galita urasi māla sithila kiṅkinī jāla,
jai śrīhita harivaṁśa latā-gr̥ha saiṁna ॥`,
    bn: `আজু তৌ জুবতি তেরৌ, বদন আনন্দ ভর‍্যৌ,
পিয় কে সঙ্গম কে সূচত সুখ চৈঁন ।
আলস বলিত বোল, সুরঙ্গ রঙে কপোল,
বিথকিত অরুণ উনীঁদে দোঊ নৈঁন ॥
রুচির তিলক লেশ কিরত কুসুম কেশ,
সির সীমন্ত ভূষিত মানৌঁ তৈঁ ন ।
করুণাকর উদার রাখত কছু ন সার,
দসন-বসন লাগত জব দেঁন ॥
কাহে কৌঁ দুরত ভীরু, পলটে প্রীতম চীর,
বস কিয়ে শ্যাম সিখৈ সত মৈঁন ।
গলিত উরসি মাল সিথিল কিংকিনী জাল,
জৈ শ্রীহিত হরিবংশ লতা-গৃহ সৈঁন ॥`
  },
  {
    id: 5,
    title: { hi: "पद ५", en: "Pad 5", bn: "পদ ৫" },
    hi: `आजु प्रभात लता-मंदिर में,
सुख बरसत अति हरषि युगल वर ।
गौर-श्याम अभिराम रंगभरे,
लटकि-लटकि पग धरत अवनि पर ॥
कुच-कुमकुम रंजित मालावलि,
सुरत नाथ श्रीश्याम धाम धर ।
प्रिया प्रेम के अंक अलंकृत,
चित्त्रित चतुर शिरोमनि निजकर ॥
दम्पति अति अनुराग मुदित कल,
गान करत मन हरत परस्पर ।
जै श्रीहित हरिवंश प्रशंस-परायन,
गायन अलि सुर देत मधुर तर ॥`,
    en: `āju prabhāta latā-mandira mēṁ,
sukha barasata ati haraṣi yugala vara ।
gaura-śyāma abhirāma raṅgabharē,
laṭaki-laṭaki paga dharata avani para ॥
kuca-kumakuma rañjita mālāvali,
surata nātha śrīśyāma dhāma dhara ।
priyā prēma kē aṅka alaṅkr̥ta,
cittrita catura śirōmani nijakara ॥
dampati ati anurāga mudita kala,
gāna karata mana harata paraspara ।
jai śrīhita harivaṁśa praśaṁsa-parāyana,
gāyana ali sura dēta madhura tara ॥`,
    bn: `আজু প্রভাত লতা-মন্দির মেঁ,
সুখ বরসত অতি হরষি যুগল বর ।
গৌর-শ্যাম অভিরাম রঙ্গভরে,
লটকি-লটকি পগ ধরত অবনি পর ॥
কুচ-কুমকুম রঞ্জিত মালাবলি,
সুরত নাথ শ্রীশ্যাম ধাম ধর ।
প্রিয়া প্রেম কে অঙ্ক অলঙ্কৃত,
চিত্ত্রিত চতুর শিরোমনি নিজকর ॥
দম্পতি অতি অনুরাগ মুদিত কল,
গান করত মন হরত পরস্পর ।
জৈ শ্রীহিত হরিবংশ প্রশংস-পরায়ন,
গায়ন অলি সুর দেত মধুর তর ॥`
  },
  {
    id: 6,
    title: { hi: "पद ६", en: "Pad 6", bn: "পদ ৬" },
    hi: `कौन चतुर जुवती प्रिया,
जाहि मिलत लाल चोर है रैन ।
दुरवत क्यौंऽव दुरै सुनि प्यारे,
रंग में गहिले चैंन में नैन ॥
उर नख-चंद्र विराने, पट अटपटे से बैन ।
जैश्रीहित हरिवंश रसिक राधापति, प्रमथित मैन ॥`,
    en: `kauna catura juvatī priyā,
jāhi milata lāla cōra hai raina ।
duravata kyauṁ'va durai suni pyārē,
raṅga mēṁ gahilē caiṁna mēṁ naina ॥
ura nakha-candra virānē, paṭa aṭapaṭē sē baina ।
jaiśrīhita harivaṁśa rasika rādhāpati, pramathita maina ॥`,
    bn: `কৌন চতুর জুবতী প্রিয়া,
জাহি মিলত লাল চোর হৈ রৈন ।
দুরবত ক্যৌঁঽব দুরৈ সুনি প্যারে,
রঙ্গ মেঁ গহিলে চৈঁন মেঁ নৈন ॥
উর নখ-চন্দ্র বিরানে, পট অটপটে সে বৈন ।
জৈশ্রীহিত হরিবংশ রসিক রাধাপতি, প্রমথিত মৈন ॥`
  },
  {
    id: 7,
    title: { hi: "पद ७", en: "Pad 7", bn: "পদ ৭" },
    hi: `आजु निकुंज मंजु में खेलत, नवल किशोर नवीन किशोरी ।
अति अनुपम अनुराग परस्पर, सुनि अभूत भूतल पर जोरी ॥
विद्रुम फटिक विविध निर्मित धर, नव कर्पूर पराग न थोरी।
कोमल किसलय सयन सुपेसल,तापर श्याम निवेसित गोरी ॥
मिथुन हास-परिहास परायन, पीक कपोल कमल पर झोरी।
गौर-श्याम भुज कलह मनोहर, नीवी-बंधन मोचत डोरी ॥
हरि-उर-मुकुर विलोकि अपनपौ, विभ्रम विकल मान-जुत भोरी ।
चिबुक सुचारु प्रलोइ प्रबोधत, पिय प्रतिबिंब जनाय निहोरी ॥
नेति नेति बचनामृत सुनि-सुनि, ललितादिक देखत दुरि चोरी ।
जै श्रीहित हरिवंश करत कर धूनन, प्रणयकोप मालावलि तोरी ॥`,
    en: `āju nikuñja mañju mēṁ khēlata, navala kiśōra navīna kiśōrī ।
ati anupama anurāga paraspara, suni abhūta bhūtala para jōrī ॥
vidruma phaṭika vividha nirmita dhara, nava karpūra parāga na thōrī।
kōmala kisalaya sayana supēsala, tāpara śyāma nivēsita gōrī ॥
mithuna hāsa-parihāsa parāyana, pīka kapōla kamala para jhōrī।
gaura-śyāma bhuja kalaha manōhara, nīvī-bandhana mōcata ḍōrī ॥
hari-ura-mukura vilōki apanapau, vibhrama vikala māna-juta bhōrī ।
cibuka sucāru pralōi prabōdhata, piya pratibimba janāya nihōrī ॥
nēti nēti bacanāmr̥ta suni-suni, lalitādika dēkhata duri cōrī ।
jai śrīhita harivaṁśa karata kara dhūnana, praṇayakōpa mālāvali tōrī ॥`,
    bn: `আজু নিকুঞ্জ মঞ্জু মেঁ খেলত, নবল কিশোর নবীন কিশোরী ।
অতি অনুপম অনুরাগ পরস্পর, সুনি অভূত ভূতল পর জোরী ॥
বিদ্রুম ফটিক বিবিধ নির্মিত ধর, নব কর্পূর পরাগ ন থোরী।
কোমল কিসলয় সয়ন সুপেসল, তাপর শ্যাম নিবেসিত গোরী ॥
মিথুন হাস-পরিহাস পরায়ন, পীক কপোল কমল পর ঝোরী।
গৌর-শ্যাম ভুজ কলহ মনোহর, নীবী-বন্ধন মোচত ডোরী ॥
হরি-উর-মুকুর বিলোকি আপনপৌ, বিভ্রম বিকল মান-জুত ভোরী ।
চিবুক সুচারু প্রলোই প্রবোধত, পিয় প্রতিবিম্ব জনায় নিহোরী ॥
নেতি নেতি বচনামৃত সুনি-সুনি, ললিতাদিক দেখত দূরি চোরী ।
জৈ শ্রীহিত হরিবংশ করত কর ধূ নন, প্রণয়কোপ মালাবলি তোরী ॥`
  },
  {
    id: 8,
    title: { hi: "पद ८", en: "Pad 8", bn: "পদ ৮" },
    hi: `अति ही अरुण तेरे नैंन नलिन री।
आलस जुत इतरात रँगमगे,
भये निशि जागर मषिन मलिन री ॥
सिथिल पलक में उठत गोलक गति,
बिंधयौ मोहन मृग सकत चलि न री।
जै श्रीहित हरिवंश हंस कल गामिनि,
संभ्रम देत भ्रमरन अलिन री ॥`,
    en: `ati hī aruṇa tērē naiṁna nalina rī।
ālasa juta itarāta raṅgamagē,
bhayē niśi jāgara maṣina malina rī ॥
sithila palaka mēṁ uṭhata gōlaka gati,
biṁdhayau mōhana mr̥ga sakata cali na rī।
jai śrīhita harivaṁśa haṁsa kala gāmini,
saṁbhrama dēta bhramarana alina rī ॥`,
    bn: `অতি হী অরুণ তেরে নৈঁন নলিন রী।
আলস জুত ইতরাত রঙমগে,
ভয়ে নিশি জাগর মষিন মলিন রী ॥
সিথিল পলক মেঁ উঠত গোলক গতি,
বিঁধয়ৌ মোহন মৃগ সকত চলি ন রী।
জৈ শ্রীহিত হরিবংশ হংস কল গামিনি,
সম্ভ্রম দেত ভ্রমরন অলিন রী ॥`
  },
  {
    id: 9,
    title: { hi: "पद ९", en: "Pad 9", bn: "পদ ৯" },
    hi: `बनी श्रीराधा-मोहन की जोरी।
इन्द्रनीलमणि श्याम मनोहर, सातकुम्भ तन गोरी ॥
भाल विशाल तिलक हरि कामिनि, चिकुर चंद्र बिच रोरी।
गज-नायक प्रभु चाल गयंदनि, गति वृषभानु किसोरी ॥
नील निचोल जुवति मोहन पट, पीत अरुण सिर खोरी।
जै श्रीहित हरिवंश रसिक राधापति, सुरत रंग में बोरी ॥`,
    en: `banī śrīrādhā-mōhana kī jōrī।
indranīlamaṇi śyāma manōhara, sātakumbha tana gōrī ॥
bhāla viśāla tilaka hari kāmini, cikura candra bica rōrī।
gaja-nāyaka prabhu cāla gayandani, gati vr̥ṣabhānu kisōrī ॥
nīla nicōla juvati mōhana paṭa, pīta aruṇa sira khōrī।
jai śrīhita harivaṁśa rasika rādhāpati, surata raṅga mēṁ bōrī ॥`,
    bn: `বনী শ্রীরাধা-মোহন কী জোরী।
ইন্দ্রনীলমণি শ্যাম মনোহর, সাতকুম্ভ তন গোরী ॥
ভাল বিশাল তিলক হরি কামিনি, চিকুর চন্দ্র বিচ রোরী।
গজ-নায়ক প্রভু চাল গয়ন্দনি, গতি বৃষভানু কিসোরী ॥
নীল নিচোল জুবতি মোহন পট, পীত অরুণ সির খোরী।
জৈ শ্রীহিত হরিবংশ রসিক রাধাপতি, সুরত রঙ্গ মেঁ বোরী ॥`
  },
  {
    id: 10,
    title: { hi: "पद १०", en: "Pad 10", bn: "পদ ১০" },
    hi: `आजु नागरी-किशोर भाँवती विचित्र जोर,
कहा कहौं अंग-अंग परम माधुरी ।
करत केलि कंठ मेलि बाहुदंड गंड-गंड,
परस सरस रास-लास मंडली जुरी ॥
श्यामसुन्दरी बिहार, बाँसुरी मृदंग तार,
मधुर घोष नूपुरादि किंकिनी चुरी।
जै श्री देखत हरिवंश आलि, निर्त्तनी सुधंग चाल,
वारि फेर देत प्राण देह सौं दुरी ॥`,
    en: `āju nāgarī-kiśōra bhām̐vatī vicitra jōra,
kahā kahauṁ aṅga-aṅga parama mādhurī ।
karata kēli kaṇṭha mēli bāhudaṇḍa gaṇḍa-gaṇḍa,
parasa sarasa rāsa-lāsa maṇḍalī jurī ॥
śyāmasundarī bihāra, bām̐surī mr̥daṅga tāra,
madhura ghōṣa nūpurādi kiṅkinī curī।
jai śrī dēkhata harivaṁśa āli, nirttanī sudhaṅga cāla,
vāri phēra dēta prāṇa dēha sauṁ durī ॥`,
    bn: `আজু নাগরী-কিশোর ভাঁবতী বিচিত্র জোর,
কহা কহৌঁ অঙ্গ-অঙ্গ পরম মাধুরী ।
করত কেলি কণ্ঠ মেলি বাহুদণ্ড গণ্ড-গণ্ড,
পরস সরস রাস-লাস মণ্ডলী জুরী ॥
শ্যামসুন্দরী বিহার, বাঁসুরী মৃদঙ্গ তার,
মধুর ঘোষ নূপুরাদি কিংকিনী চুরী।
জৈ শ্রী দেখত হরিবংশ আলি, নির্ত্তনী সুধঙ্গ চাল,
বারি ফের দেত প্রাণ দেহ সৌঁ দুরী ॥`
  },
  {
    id: 11,
    title: { hi: "पद ११", en: "Pad 11", bn: "পদ ১১" },
    hi: `मंजुल कल कुंज देश, राधा हरि विशद वेश,
राका नभ कुमुद-बंधु शरद जामिनी ।
साँवल दुति कनक अंग, बिहरत मिलि एक संग,
नीरद मनौ नील मध्य लसत दामिनी ॥
अरुण पीत नव दुकूल, अनुपम अनुराग मूल,
सौरभयुत शीत अनिल मंद गामिनी ।
किसलय दल रचित शैन, बोलत पिय चाटु बैन,
मान सहित प्रतिपद प्रतिकूल कामिनी ॥
मोहन मन मथत मार, परसत कुच-नीवि-हार,
वेपथयुत नेति-नेति बदत भामिनी ।
नरवाहन प्रभु सुकेलि, बहुविध भर भरत झेलि,
सौरत रस रूप नदी जगत-पावनी ॥`,
    en: `mañjula kala kuñja dēśa, rādhā hari viśada vēśa,
rākā nabha kumuda-bandhu śarada jāminī ।
sām̐vala duti kanaka aṅga, biharata mili ēka saṅga,
nīrada manau nīla madhya lasata dāminī ॥
aruṇa pīta nava dukūla, anupama anurāga mūla,
saurabhayuta śīta anila manda gāminī ।
kisalaya dala racita śaina, bōlata piya cāṭu baina,
māna sahita pratipada pratikūla kāminī ॥
mōhana mana mathata māra, parasata kuca-nīvi-hāra,
vēpathayuta nēti-nēti badata bhāminī ।
naravāhana prabhu sukēli, bahuvidha bhara bharata jhēli,
saurata rasa rūpa nadī jagata-pāvanī ॥`,
    bn: `মঞ্জুল কল কুঞ্জ দেশ, রাধা হরি বিশদ বেশ,
রাকা নভ কুমুদ-বন্ধু শরদ জামিনী ।
সাঁবল দুতি কনক অঙ্গ, বিহরত মিলি এক সঙ্গ,
নীরদ মনৌ নীল মধ্য লসত দামিনী ॥
অরুণ পীত নব দুকূল, অনুপম অনুরাগ মূল,
সৌরভযুত শীত অনিল মন্দ গামিনী ।
কিসলয় দল রচিত শৈন, বোলত পিয় চাটু বৈন,
মান সহিত প্রতিপদ প্রতিকূল কামিনী ॥
মোহন মন মথত মার, পরসত কুচ-নীবি-হার,
বেপথযুত নেতি-নেতি বদত ভামিনী ।
নরবাহন প্রভু সুকেলি, বহুবিধ ভর ভরত ঝেলি,
সৌরত রস রূপ নদী জগত-পাবনী ॥`
  },
  {
    id: 12,
    title: { hi: "पद १२", en: "Pad 12", bn: "পদ ১২" },
    hi: `चलहि राधिके सुजान, तेरे हित सुख निधान,
रास रच्यौ श्याम तट कलिंद-नन्दिनी ।
बाजत रसमूल मुरलिका अनन्दिनी ॥
निर्त्तत युवती समूह, राग-रंग अति कुतूह,
वंशीवट निकट जहाँ, परम रमनि भूमि तहाँ,
सकल सुखद मलय बहै वायु मन्दिनी ॥
जाती ईषद विकास, कानन अतिसय सुवास,
राका निशि सरद मास विमल चंदिनी ॥
नरवाहन प्रभु निहारि, लोचन भरि घोष-नारि,
नख-सिख सौन्दर्य काम-दुख-निकन्दिनी ।
विलसहु भुज ग्रीव मेलि, भामिनी सुख-सिन्धु झेलि,
नव निकुंज श्याम केलि, जगत-वन्दिनी ॥`,
    en: `calahi rādhikē sujāna, tērē hita sukha nidhāna,
rāsa racyau śyāma taṭa kaliñda-nandinī ।
bājata rasamūla muralikā anandinī ॥
nirttata yuvatī samūha, rāga-raṅga ati kutūha,
vaṁśīvaṭa nikaṭa jahām̐, parama ramani bhūmi tahām̐,
sakala sukhada malaya bahai vāyu mandinī ॥
jātī īṣada vikāsa, kānana atisaya suvāsa,
rākā niśi sarada māsa vimala candinī ॥
naravāhana prabhu nihāri, lōcana bhari ghōṣa-nāri,
nakha-sikha saundarya kāma-dukha-nikandinī ।
vilasahu bhuja grīva mēli, bhāminī sukha-sindhu jhēli,
nava nikuñja śyāma kēli, jagata-vandinī ॥`,
    bn: `চলহি রাধিকে সুজান, তেরে হিত সুখ নিধান,
রাস রচৌ শ্যাম তট কলিন্দ-নন্দিনী ।
বাজত রসমূল মুরলিকা অনন্দিনী ॥
নিৰ্ত্তত যুবতী সমূহ, রাগ-রঙ্গ অতি কুতূহ,
বংশীবট নিকট জহাঁ, পরম রমনি ভূমি তহাঁ,
সকল সুখদ মলয় বহৈ বায়ু মন্দিনী ॥
জাতী ঈষদ বিকাস, কানন অতিসয় সুবাস,
রাকা নিশি সরদ মাস বিমল চন্দিনী ॥
নরবাহন প্রভু নিহারি, লোচন ভরি ঘোষ-নারি,
নখ-সিখ সৌন্দৰ্য কাম-দুখ-নিকন্দিনী ।
বিলসহু ভুজ গ্রীব মেলি, ভামিনী সুখ-সিন্ধু ঝেলি,
নব নিকুঞ্জ শ্যাম কেলি, জগত-বন্দিনী ॥`
  },
  {
    id: 13,
    title: { hi: "पद १३", en: "Pad 13", bn: "পদ ১৩" },
    hi: `नन्द के लाल मन मोर ।
हौं अपने मोतिन लर पोवत, काँकर डारि गयौ सखि भोर ॥
बंक विलोकनि चाल छबीली, रसिक शिरोमनि नन्द किशोर ।
कहि कैसें मन रहत श्रवन सुनि, सरस मधुर मुरली की घोर ॥
इंदु गोविन्द वदन के कारन, चितवन कौं भये नैंन चकोर ।
(जैश्री) हित हरिवंश रसिक रस जुवती, तू लै मिल सखी प्रान अकोर ॥`,
    en: `nanda kē lāla mana mōra ।
hauṁ apanē mōtina lara pōvata, kām̐kara ḍāri gayau sakhi bhōra ॥
baṅka vilōkani cāla chabīlī, rasika śirōmani nanda kiśōra ।
kahi kaisēṁ mana rahata śravana suni, sarasa madhura muralī kī ghōra ॥
indu gōvinda vadana kē kārana, citavana kauṁ bhayē naiṁna cakōra ।
(jaiśrī) hita harivaṁśa rasika rasa juvatī, tū lai mila sakhī prāna akōra ॥`,
    bn: `নন্দ কে লাল মন মোর ।
হৌঁ অপনে মোতিন লর পোবত, কাঁকর ডারি গয়ৌ সখি ভোর ॥
বঙ্ক বিলোকনি চাল ছবীলী, রসিক শিরোমনি নন্দ কিশোর ।
কহি কৈসৈঁ মন রহত শ্রবন সুনি, সরস মধুর মুরলী কী ঘোর ॥
ইন্দু গোবিন্দ বদন কে কারন, চিতবন কৌঁ ভয়ে নৈঁন চকোর ।
(জৈশ্রী) হিত হরিবংশ রসিক রস জুবতী, তূ লৈ মিল সখী প্রান অকোর ॥`
  },
  {
    id: 14,
    title: { hi: "पद १४", en: "Pad 14", bn: "পদ ১৪" },
    hi: `अधर अरुण तेरे कैसे कै दुराऊँ।
रवि ससि शंक भजन कियौ अपवस, अद्भुत रंगन कुसुम बनाऊँ
सुभ कौसेय कसिव कौस्तुभमनि, पंकज-सुतन लै अंगनु लुपाऊँ
हरषित इन्दु तजत जैसे जलधर, सो भ्रम ढूंढ़ि कहाँ हौं पाऊँ
अम्बुन दम्भ कछू नहीं व्यापत, हिमकर तपै ताहि कैसे कै बुझाऊँ
(जैनी) हित हरिवंश रसिक नवरंग पिय, भृकुटी भौंह तेरे खंजन लराऊँ`,
    en: `adhara aruṇa tērē kaisē kai durāūm̐।
ravi sasi śaṅka bhajana kiyau apavasa, adbhuta raṅgana kusuma banāūm̐
subha kausēya kasiva kaustubhhamani, paṅkaja-sutana lai aṅganu lupāūm̐
haraṣita indu tajata jaisē jaladhara, sō bhrama ḍhūṁḍhi kahām̐ hauṁ pāūm̐
ambuna dambha kachū nahīṁ vyāpata, himakara tapai tāhi kaisē kai buzhāūm̐
(jainī) hita harivaṁśa rasika navaraṅga piya, bhr̥kuṭī bhauṁha tērē khañjana larāūm̐`,
    bn: `অধর অরুণ তেরে কৈসে কৈ দুরাঊঁ।
রবি সসি শংক ভজন কিয়ৌ অপবস, অদ্ভুত রঙ্গন কুসুম বনাঊঁ
সুভ কৌসেয় কসিব কৌস্তুভমনি, পঙ্কজ-সুতন লৈ অঙ্গনু লুপাঊঁ
হরষিত ইন্দু তজত জৈসে জলধর, সো ভ্রম ঢূঁঢ়ি কহাঁ হৌঁ পাঊঁ
অম্বুন দম্ভ কছূ নহীং ব্যাপত, হিমকর তপৈ তাহি কৈসে কৈ বুঝাঊঁ
(জৈনী) হিত হরিবংশ রসিক নবরঙ্গ পিয়, ভ্রুকুটি ভৌম্হ তেরে খঞ্জন লরাঊঁ`
  },
  {
    id: 15,
    title: { hi: "पद १५", en: "Pad 15", bn: "পদ ১৫" },
    hi: `अपनी बात मोसौं कहि री भामिनी,
औंगी मौंगी रहत गरव की माती।
हौं तोसौं कहत हारी, सुनिरी राधिका प्यारी,
निशि कौ रंग क्यौं न कहत लजाती ॥
गलित कुसुम बैनी, सुनिरी सारंग-नैनी,
छूटी लट अचरा बढ़त अलसाती ।
अधर निरंग रंग रच्यौरी कपोलन,
जुवति चलत गजगति अरुझाती ॥
रहसि रमी छबीले, रसन वसन ढीले,
शिथिल कसनि कंचुकी उर राती ।
सरखी सौं सुनि श्रवन, वचन मुदित मन,
चली हरिवंश भवन मुसिकाती`,
    en: `apanī bāta mōsauṁ kahi rī bhāminī,
auṁgī mauṁgī rahata garava kī mātī।
hauṁ tōsauṁ kahata hārī, sunirī rādhikā pyārī,
niśi kau raṅga kyauṁ na kahata lajātī ॥
galita kusuma bainī, sunirī sāraṅga-nainī,
chūṭī laṭa acarā baṛhata alasātī ।
adhara niraṅga raṅga racyaurī kapōlana,
juvati calata gajagati arujhātī ॥
rahasi ramī chabīlē, rasana vasana ḍhīlē,
śithila kasani kañcukī ura rātī ।
sarakhī sauṁ suni śravana, vacana mudita mana,
calī harivaṁśa bhavana musikātī`,
    bn: `অপনী বাত মোসৌঁ কহি রী ভামিনী,
ঔংগী মৌংগী রহত গরব কী মাতী।
হৌঁ তোসৌঁ কহত হারী, সুনিরী রাধিকা প্যারী,
নিশি কৌ রঙ্গ ক্যৌঁ ন কহত লজাতী ॥
গলিত কুসুম বৈনী, সুনিরী সারঙ্গ-নৈনী,
ছূটী লট অচরা বঢ়ত অলসাতী ।
অধর নিরঙ্গ রঙ্গ রচৌরী কপোলন,
জুবতি চলত গজগতি অরুঝাতী ॥
রহসি রমী ছবীলে, রসন বসন ঢীলে,
শিথিল কসনি কঞ্চুকী উর রাতী ।
সরখী সৌঁ সুনি শ্রবন, বচন মুদিত মন,
চলী হরিবংশ ভবন মুসিকাতী`
  },
  {
    id: 16,
    title: { hi: "पद १६", en: "Pad 16", bn: "পদ ১৬" },
    hi: `आजु मेरे कहे चलौ मृगर्नैनी ।
गावत सरस जुवति मंडल में, पिय सौं मिलें भलें पिकबेंनी
परम प्रवीन कोक-विद्या में, अभिनय निपुन लाग गति लैनी
रूपरासि सुनि नवल किशोरी, पल-पल घटत चाँदनी रैनी
जैश्री हित हरिवंश चली अति आतुर, राधारवन सुरत सुख दैनी
रहसि रभस आलिंगन चुम्बन, मदन कोटि कुल भई कुचैनी`,
    en: `āju mērē kahē calau mr̥garnainī ।
gāvata sarasa juvati maṇḍala mēṁ, piya sauṁ milēṁ bhalēṁ pikabēṁnī
parama pravīna kōka-vidyā mēṁ, abhinaya nipuna lāga gati lainī
rūparāsi suni navala kiśōrī, pala-pala ghaṭata cām̐danī rainī
jaiśrī hita harivaṁśa calī ati ātura, rādhāravana surata sukha dainī
rahasi rabhasa āliṅgana cumbana, madana kōṭi kula bhaī kucainī`,
    bn: `আজু মেরে কহে চলৌ মৃগর্নৈনী ।
গাবত সরস জুবতি মণ্ডল মেঁ, পিয় সৌঁ মিলেঁ ভলেঁ পিকবেঁনী
পরম প্রবীন কোক-বিদ্যা মেঁ, অভিনয় নিপুন লাগ গতি লৈনী
রূপরাসি সুনি নবল কিশোরী, পল-পল ঘটত চাঁদনী রৈনী
জৈশ্রী হিত হরিবংশ চলী অতি আতুর, রাধারবন সুরত সুখ দৈনী
রহসি রভস আলিঙ্গন চুম্বন, মদন কোটি কুল ভঈ কুচৈনী`
  },
  {
    id: 17,
    title: { hi: "पद १७", en: "Pad 17", bn: "পদ ১৭" },
    hi: `आजु देखि ब्रजसुन्दरी मोहन बनी कैलि।
अंस-अंस बाहु दै, किशोर जोर रूप रासि,
मनौ तमाल अरुझि रही सरस कनक बेलि
नव निकुंज भ्रमर गुञ्ज, मंजु घोष प्रेम पुञ्ज,
गान करत मोर पिकन अपने सुर सों मेलि ।
मदन मुदित अंग-अंग, बीच-बीच सुरत रंग,
पल-पल हरिवंश पिवत नैन चषक झेलि ॥`,
    en: `āju dēkhi brajasundarī mōhana banī kaili।
aṁsa-aṁsa bāhu dai, kiśōra jōra rūpa rāsi,
manau tamāla arujhi rahī sarasa kanaka bēli
nava nikuñja bhramara guñja, mañju ghōṣa prēma puñja,
gāna karata mōra pikana apanē sura sōṁ mēli ।
madana mudita aṅga-aṅga, bīca-bīca surata raṅga,
pala-pala harivaṁśa pivata naina caṣaka jhēli ॥`,
    bn: `আজু দেখি ব্রজসুন্দরী মোহন বনী কৈলি।
অংস-অংস বাহু দৈ, কিশোর জোর রূপ রাসি,
মনৌ তমাল অরুঝি রহী সরস কনক বেলি
নব নিকুঞ্জ ভ্রমর গুঞ্জ, মঞ্জু ঘোষ প্রেম পুঞ্জ,
গান করত মোর পিকন অপনে সুর সোঁ মেলি ।
মদন মুদিত অঙ্গ-অঙ্গ, বীচ-বীচ সুরত রঙ্গ,
পল-পল হরিবংশ পিবত নৈন চষক ঝেলি ॥`
  },
  {
    id: 18,
    title: { hi: "पद १८", en: "Pad 18", bn: "পদ ১৮" },
    hi: `सुनि मेरौ वचन छबीली राधा। तैं पायौ रससिंधु अगाधा ॥
तू वृषभानु गोप की बेटी । मोहनलाल रसिक हँसि भेटी ॥
जाहि बिरंचि उमापति नाये । तापै तैं वन-फूल बिनाये ॥
जो रस नेति-नेति श्रुति भाख्यौ । ताकौ तैं अधर सुधारस चाख्यौ ॥
तेरौ रूप कहत नहिं आवै। (जैश्री) हित हरिवंश कछुक जस गावै ॥`,
    en: `suni mērau vacana chabīlī rādhā। taiṁ pāyau rasasindhu agādhā ॥
tū vr̥ṣabhānu gōpa kī bēṭī । mōhanalāla rasika ham̐si bhēṭī ॥
jāhi birañci umāpati nāyē । tāpai taiṁ vana-phūla bināyē ॥
jō rasa nēti-nēti śruti bhākhyau । tākau taiṁ adhara sudhārasa cākhyau ॥
tērau rūpa kahata nahiṁ āvai। (jaiśrī) hita harivaṁśa kachuka jasa gāvai ॥`,
    bn: `সুনি মেরৌ বচন ছবীলী রাধা। তৈঁ পায়ৌ রসসিন্ধু অগাধা ॥
তূ বৃষভানু গোপ কী বেটী । মোহনলাল রসিক হঁসি ভেটী ॥
জাহি বিরংচি উমাপতি নায়ে । তাপৈ তৈঁ বন-ফুল বিনায়ে ॥
জো রস নেতি-নেতি শ্রুতি ভাখ্যৌ । তাকৌ তৈঁ অধর সুধারস চাখ্যৌ ॥
তেরৌ রূপ কহত নহিঁ আবৈ। (জৈশ্রী) হিত হরিবংশ কছুক জস গাবৈ ॥`
  },
  {
    id: 19,
    title: { hi: "पद १९", en: "Pad 19", bn: "পদ ১৯" },
    hi: `खेलत रास रसिक ब्रज-मण्डन । जुवतिन अंस दिये भुज दण्डन ॥
सरद विमल नभ चन्द्र विराजै । मधुर-मधुर मुरली कल बाजै ॥
अति राजत घनश्याम तमाला। कंचन-बेलि बनी ब्रजबाला ॥
बाजत ताल मृदंग उपंगा। गान मथत मन कोटि अनंगा ॥
भूषन बहुत विविध रंग सारी। अंग सुधंग दिखावत नारी ॥
बरसत कुसुम मुदित सुरयोषा। सुनियत दिवि दुंदुभि कल घोषा ॥
(जैश्री) हित हरिवंश मगन मन श्यामा। राधारवन सकल सुख धामा ॥`,
    en: `khēlata rāsa rasika braja-maṇḍana । juvatina aṁsa diyē bhuja daṇḍana ॥
sarada vimala nabha candra virājai । madhura-madhura muralī kala bājai ॥
ati rājata ghanaśyāma tamālā। kañcana-bēli banī brajabālā ॥
bājata tāla mr̥daṅga upaṅgā। gāna mathata mana kōṭi anaṅgā ॥
bhūṣana bahuta vividha raṅga sārī। aṅga sudhaṅga dikhāvata nārī ॥
barasata kusuma mudita surayōṣā। suniyata divi dundubhi kala ghōṣā ॥
(jaiśrī) hita harivaṁśa magana mana śyāmā। rādhāravana sakala sukha dhāmā ॥`,
    bn: `খেলত রাস রসিক ব্রজ-মণ্ডন । জুবতিন অংস দিয়ে ভুজ দণ্ডন ॥
সরদ বিমল নভ চন্দ্র বিরাজৈ । মধুর-মধুর মুরলী কল বাজৈ ॥
অতি রাজত ঘনশ্যাম তমাল। কঞ্চন-বেলি বনী ব্রজবালা ॥
বাজত তাল মৃদঙ্গ উপঙ্গা। গান মথত মন কোটি অনঙ্গা ॥
ভূষন বহুত বিবিধ রঙ্গ সারী। অঙ্গ সুধঙ্গ দিখাবত নারী ॥
বরসত কুসুম মুদিত সুরযোষা। শুনিয়ত দিবি দুন্দুভি কল ঘোষা ॥
(জৈশ্রী) হিত হরিবংশ মগন মন শ্যামা। রাধারবন সকল সুখ ধামা ॥`
  },
  {
    id: 20,
    title: { hi: "पद २०", en: "Pad 20", bn: "পদ ২০" },
    hi: `मोहन लाल के रस माती ।
बधू गुपत-गोवत कत मोसौं, प्रथम नेह सकुचाती ॥
देख सँभार पीत पट ऊपर, कहाँ चूनरी राती।
टूटी लर लटकत मोतिन की, नख बिधु अंकित छाती ॥
अधर-बिंब खंडित मषि मंडित, गंड चलत अरुझाती ।
अरुन नैंन घूमत आलस जुत, कुसुम गलित लटपाती ॥
आजु रहसि मोहन सब लूटी, विविध आपुनी थाती ।
जैश्रीहितहरिवंश वचन सुनिभामिनि, भवन चली मुसिकाती।`,
    en: `mōhana lāla kē rasa mātī ।
badhū gupata-gōvata kata mōsauṁ, prathama nēha sakucātī ॥
dēkha sam̐bhāra pīta paṭa ūpara, kahām̐ cūnarī rātī।
ṭūṭī lara laṭakata mōtina kī, nakha bidhu aṅkita chātī ॥
adhara-biṁba khaṇḍita maṣi maṇḍita, gaṇḍa calata arujhātī ।
aruna naiṁna ghūmata ālasa juta, kusuma galita laṭapātī ॥
āju rahasi mōhana saba lūṭī, vividha āpunī thātī ।
jaiśrīhitaharivaṁśa vacana sunibhāmini, bhavana calī musikātī।`,
    bn: `মোহন লাল কে রস মাতী ।
বধু গুপত-গোবত কত মোসৌঁ, প্রথম নেহ সকুচাতী ॥
দেখ সঁভার পীত পট ঊপর, কহাঁ চুনরী রাতী।
টুটী লর লটকত মোতিন কী, নখ বিধু অঙ্কিত ছাতী ॥
অধর-বিম্ব খণ্ডিত মষি মণ্ডিত, গণ্ড চলত অরুঝাতী ।
অরুন নৈঁন ঘূমত আলস জুত, কুসুম গলিত লটপাতী ॥
আজু রহসি মোহন সব লুটী, বিবিধ আপুনী থাতী ।
জৈশ্রীহিতহরিবংশ বচন সুনিভামিনি, ভবন চলী মুসিকাতী।`
  },
  {
    id: 21,
    title: { hi: "पद २१", en: "Pad 21", bn: "পদ ২১" },
    hi: `तेरे नैंन करत दोऊ चारी ।
अति कुलकात समात नहीं कहुँ, मिले हैं कुञ्जबिहारी ॥
बिथुरी माँग कुसुम गिरि-गिरि परै, लटकि रही लट न्यारी।
उर नख-रेख प्रगट देखियत है, कहा दुरावत प्यारी ॥
परी है पीक सुभग गंडन पर, अधर निरंग सुकुमारी।
(जैश्री) हित हरिवंश रसिकनी भामिनि, आलस अँग-अँग भारी ॥`,
    en: `tērē naiṁna karata dōū cārī ।
ati kulakāta samāta nahīṁ kahuṁ, milē haiṁ kuñjabihārī ॥
bithurī mām̐ga kusuma giri-giri parai, laṭaki rahī laṭa nyārī।
ura nakha-rēkha pragaṭa dēkhiyata hai, kahā durāvata pyārī ॥
parī hai pīka subhaga gaṇḍana para, adhara niraṅga sukumārī।
(jaiśrī) hita harivaṁśa rasikanī bhāmini, ālasa aṁga-aṁga bhārī ॥`,
    bn: `তেরে নৈঁন করত দোঊ চারী ।
অতি কুলকাত সমাত নহীং কহুং, মিলে হৈং কুঞ্জবিহারী ॥
বিথুরী মাঁগ কুসুম গিরি-গিরি পরৈ, লটকি রহী লট ন্যারী।
উর নখ-রেখ প্রগট দেখিয়ত হৈ, কহা দুরাবত প্যারী ॥
পরী হৈ পীক সুভগ গংডন পর, অধর নিরঙ্গ সুকুমারী।
(জৈশ্রী) হিত হরিবংশ রসিকনী ভামিনি, আলস অঁগ-অঁগ ভারী ॥`
  },
  {
    id: 22,
    title: { hi: "पद २२", en: "Pad 22", bn: "পদ ২২" },
    hi: `नैनन पर वारौं कोटिक खंजन ।
चंचल चपल अरुन अनियारे, अग्रभाग बन्यौ अंजन ॥
रुचिर मनोहर वक्र बिलोकन, सुरत- समर-दल-गंजन ।
(जैश्री) हित हरिवंश कहत न बनें छबि, सुखसमुद्र-मनरंजन ॥`,
    en: `nainana para vārauṁ kōṭika khañjana ।
cañcala capala aruna aniyārē, agrabhāga banyau añjana ॥
rucira manōhara vakra bilōkana, surata- samara-dala-gañjana ।
(jaiśrī) hita harivaṁśa kahata na banēṁ chabi, sukhasamudra-manarañjana ॥`,
    bn: `নৈনন পর বারৌং কোটিক খংজন ।
চংচল চপল অরুন অনিয়ারে, অগ্রভাগ বন্যৌ অংজন ॥
রুচির মনোহর বক্র বিলোকন, সুরত- সমর-দল-গংজন ।
(জৈশ্রী) হিত হরিবংশ কহত ন বনেং ছবি, সুখসমুদ্র-মনরংজন ॥`
  },
  {
    id: 23,
    title: { hi: "पद २३", en: "Pad 23", bn: "পদ ২৩" },
    hi: `राधा प्यारी तेरे नैंन सलोल ।
तैं निज भजन कनक तन जोवन, लियौ मनोहर मोल ॥
अधर निरंग अलक लट छूटी, रंजित पीक कपोल ।
तू रस मगन भई नहिं जानत, ऊपर पीत निचोल ॥
कुच युग पर नख-रेख प्रगट मानौं, शंकर सिर ससि-टोल ।
(जैश्री) हित हरिवंश कहत कछु भामिनि, अति आलस सौं बोल ॥`,
    en: `rādhā pyārī tērē naiṁna salōla ।
taiṁ nija bhajana kanaka tana jōvana, liyau manōhara mōla ॥
adhara niraṅga alaka laṭa chūṭī, rañjita pīka kapōla ।
tū rasa magana bhaī nahiṁ jānata, ūpara pīta nicōla ॥
kuca yuga para nakha-rēkha pragaṭa mānauṁ, śaṅkara sira sasi-ṭōla ।
(jaiśrī) hita harivaṁśa kahata kachu bhāmini, ati ālasa sauṁ bōla ॥`,
    bn: `রাধা প্যারী তেরে নৈঁন সলোল ।
তৈং নিজ ভজন কনক তন জোবন, লিয়ৌ মনোহর মোল ॥
অধর নিরংগ অলক লট ছুটী, রংজিত পীক কপোল ।
তূ রস মগন ভঈ নহিঁ জানত, উপর পীত নিচোল ॥
কুচ যুগ পর নখ-রেখ প্রগট মানৌং, শংকর সির সসি-টোল ।
(জৈশ্রী) হিত হরিবংশ কহত কছু ভামিনি, অতি আলস সৌং বোল ॥`
  },
  {
    id: 24,
    title: { hi: "पद २४", en: "Pad 24", bn: "পদ ২৪" },
    hi: `आजु गोपाल रास रस खेलत, पुलिन कल्पतरु तीर री सजनी ।
सरद विमल नभ चन्द्र विराजत, रोचक त्रिविध समीर री सजनी ॥
चंपक बकुल मालती मुकुलित, मत्त मुदित पिक कीर री सजनी ॥
देसी सुधंग राग रँग नीकौ, ब्रज-जुवतिन की भीर री सजनी ॥
मघवा मुदित निसान बजायौ, व्रत छाँड्यौ मुनि धीर री सजनी ।
(जैश्री) हित हरिवंश मगन मन श्यामा, हरत मदन घन पीर री सजनी ॥`,
    en: `āju gōpāla rāsa rasa khēlata, pulina kalpataru tīra rī sajanī ।
sarada vimala nabha candra virājata, rōcaka trividha samīra rī sajanī ॥
campaka bakula mālatī mukulita, matta mudita pika kīra rī sajanī ॥
dēsī sudhaṅga rāga raṁga nīkau, braja-juvatina kī bhīra rī sajanī ॥
maghavā mudita nisāna bajāyau, vrata chām̐ḍyau muni dhīra rī sajanī ।
(jaiśrī) hita harivaṁśa magana mana śyāmā, harata madana ghana pīra rī sajanī ॥`,
    bn: `আজু গোপাল রাস রস খেলত, পুলিন কল্পতরু তীর রী সজনী ।
সরদ বিমল নভ চন্দ্র বিরাজত, রোচক ত্রিবিধ সমীর রী সজনী ॥
চম্পক বকুল মালতী মুকুলিত, মত্ত মুদিত পিক কীর রী সজনী ॥
দেসী সুধংগ রাগ রঁগ নীকৌ, ব্রজ-জুবতিন কী ভীর রী সজনী ॥
মঘবা মুদিত নিসান বজায়ৌ, ব্রত ছাঁড্যৌ মুনি ধীর রী সজনী ।
(জৈশ্রী) হিত হরিবংশ মগন মন শ্যামা, হরত মদন ঘন পীর রী সজনী ॥`
  },
  {
    id: 25,
    title: { hi: "पद २५", en: "Pad 25", bn: "পদ ২৫" },
    hi: `आज नीको बनी श्रीराधिका नागरी।
ब्रज-जुवति-जूथ में रूप अरु चतुरई, सील सिंगार गुन सबन तैं आगरी ॥
कमल दक्षिण भुजा, वाम भुज अंस सखि गावती सरस मिलि मधुर स्वर राग री
सकल विद्या विदित, रहसि हरिवंश हित, मिलत नव-कुञ्ज वर श्याम बड़भाग री ॥`,
    en: `āja nīkō banī śrīrādhikā nāgarī।
braja-juvati-jūtha mēṁ rūpa aru caturaī, sīla siṅgāra guna sabana taiṁ āgarī ॥
kamala dakṣiṇa bhujā, vāma bhuja aṁsa sakhi gāvatī sarasa mili madhura svara rāga rī
sakala vidyā vidita, rahasi harivaṁśa hita, milata nava-kuñja vara śyāma baṛabhāga rī ॥`,
    bn: `আজ নীকো বনী শ্রীরাধিকা নাগরী।
ব্রজ-জুবতি-জূথ মেং রূপ অরু চতুরঈ, সীল সিংগার গুন সবন তৈং আগরী ॥
কমল দক্ষিণ ভুজা, বাম ভুজ অংস সখি গাবতী সরস মিলি মধুর স্বর রাগ রী
সকল বিদ্যা বিদিত, রহসি হরিবংশ হিত, মিলত নব-কুঞ্জ বর শ্যাম বড়ভাগ রী ॥`
  },
  {
    id: 26,
    title: { hi: "पद २६", en: "Pad 26", bn: "পদ ২৬" },
    hi: `मोहनी मदन गोपाल की बाँसुरी।
माधुरी श्रवन पुट, सुनत सुनि राधिके ! करत रतिराज के ताप कौ नासुरी ॥
सरद राका रजनि, विपिन वृन्दा सजनि, अनिल अति मंद सीतल सहित बासु री ॥
परम पावन पुलिन, भृंग-सेवित नलिन, कल्पतरु तीर बलवीर कृत रासु री ॥
सकल मंडल भलीं, तुम जु हरि सौं मिलीं, बनी वर बनित उपमा कहीँ कासु री।
तुम जु कंचन तनी, लाल मर्कत मनी, उभय कल हंस हरिवंश बलि दासु री ॥`,
    en: `mōhanī madana gōpāla kī bām̐surī।
mādhurī śravana puṭa, sunata suni rādhikē ! karata ratirāja kē tāpa kau nāsurī ॥
sarada rākā rajani, vipina vr̥ndā sajani, anila ati manda sītala sahita bāsu rī ॥
parama pāvana pulina, bhr̥ṅga-sēvita nalina, kalpataru tīra balavīra kr̥ta rāsu rī ॥
sakala maṇḍala bhalīṁ, tuma ju hari sauṁ milīṁ, banī vara banita upamā kahīm̐ kāsu rī।
tuma ju kañcana tanī, lāla markata manī, ubhaya kala haṁsa harivaṁśa bali dāsu rī ॥`,
    bn: `মোহনী মদন গোপাল কী বাঁসুরী।
মাধুরী শ্রবন পুট, সুনত সুনি রাধিকে ! করত রতিরাজ কে তাপ কৌ নাসুরী ॥
সরদ রাকা রজনি, বিপিন বৃন্দা সজনি, অনিল অতি মংদ সীতল সহিত বাসু রী ॥
পরম পাবন পুলিন, ভৃংগ-সেবিত নলিন, কল্পতরু তীর বলবীর কৃত রাসু রী ॥
সকল মণ্ডল ভলীং, তুম জু হরি সৌং মিলীং, বনী বর বনিত উপমা কহীঁ কাসু রী।
তুম জু কংচন তনী, লাল মর্কত মনী, উভয় কল হংস হরিবংশ বলি দাসু রী ॥`
  },
  {
    id: 27,
    title: { hi: "पद २७", en: "Pad 27", bn: "পদ ২৭" },
    hi: `मधुऋतु वृन्दावन आनंद न थोर ।
राजत नव नागरी कुशल किशोर ॥
जूथिका जुगल रूप मञ्जरी रसाल ।
विथकित अलि मधु-माधवी गुलाल ॥
चंपक बकुल विविध कुल सरोज ।
केतकी मेदिनी मद मुदित मनोज ॥
रोचक रुचिर बहै त्रिविध समीर ।
मुकुलित नूत नदत पिक-कीर ॥
पावन पुलिन घन मंजुल निकुञ्ज ।
किसलय रचित सैन सुख-पुञ्ज ॥
मंजीर मुरली मुख मुरज डफ मृदंग ।
बाजत उपंग वीणा चंग ॥
मृगमद मलयज कुमकुम अबीर ।
बंदन अगरसत सुरंगित चीर ॥
गावत सुन्दरि-सुन्दरि हरि हरि सरस धमार ।
पुलकित खग-मृग बहत न वारि ॥
(जैश्री) हित हरिवंश हंस हंसिनी समाज ।
ऐसे ही करौ मिलि जुग जुग राज ॥`,
    en: `madhur̥tu vr̥ndāvana ānanda na thōra ।
rājata nava nāgarī kuśala kiśōra ॥
jūthikā jugala rūpa mañjarī rasāla ।
vithakita ali madhu-mādhavī gulāla ॥
campaka bakula vividha kula sarōja ।
kētakī mēdinī mada mudita manōja ॥
rōcaka rucira bahai trividha samīra ।
mukulita nūta nadata pika-kīra ॥
pāvana pulina ghana mañjula nikuñja ।
kisalaya racita saina sukha-puñja ॥
mañjīra muralī mukha muraja ḍapha mr̥daṅga ।
bājata upaṅga vīṇā caṅga ॥
mr̥gamada malayaja kumakuma abīra ।
bandana agarasata suraṅgita cīra ॥
gāvata sundari-sundari hari hari sarasa dhamāra ।
pulakita khaga-mr̥ga bahata na vāri ॥
(jaiśrī) hita harivaṁśa haṁsa haṁsinī samāja ।
aisē hī karau mili juga juga rāja ॥`,
    bn: `মধুরিতু বৃন্দাবন আনংদ ন থোর ।
রাজত নব নাগরী কুশল কিশোর ॥
জূথিকা জুগল রূপ মঞ্জরী রসাল ।
বিথকিত অলি মধু-মাধবী গুলাল ॥
চম্পক বকুল বিবিধ কুল সরোজ ।
কেতকী মেদিনী মদ মুদিত মনোজ ॥
রোচক রুচির বহৈ ত্রিবিধ সমীর ।
মুকুলিত নূত নদত পিক-কীর ॥
পাবন পুলিন ঘন মঞ্জুল নিকুঞ্জ ।
কিসলয় রচিত সৈন সুখ-পুঞ্জ ॥
মঞ্জীর মুরলী মুখ মুরজ ডফ মৃদঙ্গ ।
বাজত উপঙ্গ বীণা চঙ্গ ॥
মৃগমদ মলয়জ কুমকুম আবীর ।
বংদন অগরসত সুরংগিত চীর ॥
গাবত সুংদরি-সুংদরি হরি হরি সরস ধমার ।
পুলকিত খগ-মৃগ বহত ন বারি ॥
(জৈশ্রী) হিত হরিবংশ হংস হংসিনী সমাজ ।
ঐসে হী করৌ মিলি জুগ জুগ রাজ ॥`
  },
  {
    id: 28,
    title: { hi: "पद २८", en: "Pad 28", bn: "পদ ২৮" },
    hi: `राधे देखि वन की बात ।
ऋतु बसन्त अनंत मुकुलित, कुसुम अरु फल पात ॥
वेनु धुनि कतव नंदलाल करत व सुनि बोली,
वृथा विलम्ब भामिनि, क्यौं अरसात जात औसर ।
मर्कतमनि छबीलौ, तुम जु कंचन गात ।
बनी श्रीहित हरिवंश जोरी, उभय गुन-गन-मात ॥`,
    en: `rādhē dēkhi vana kī bāta ।
r̥tu basanta ananta mukulita, kusuma aru phala pāta ॥
vēnu dhuni katava nandalāla karata va suni bōlī,
vr̥thā vilamba bhāmini, kyauṁ arasāta jāta ausara ।
markatamani chabīlau, tuma ju kañcana gāta ।
banī śrīhita harivaṁśa jōrī, ubhaya guna-gana-māta ॥`,
    bn: `রাধে দেখি বন কী বাত ।
ঋতু বসন্ত অনংত মুকুলিত, কুসুম অরু ফল পাত ॥
বেনু ধুনি কতব নংদলাল করত ব সুনি বোলী,
বৃথা বিলম্ব ভামিনি, ক্যৌং অরসাত জাত ঔসর ।
মর্কতমনি ছবীলৌ, তুম জু কংচন গাত ।
বনী শ্রীহিত হরিবংশ জোরী, উভয় গুন-গন-মাত ॥`
  },
  {
    id: 29,
    title: { hi: "पद २९", en: "Pad 29", bn: "পদ ২৯" },
    hi: `ब्रज नव तरुनि कदम्ब मुकुटमणि, श्यामा आजु बनी।
नख-शिख लौं अँग-अंग माधुरी, मोहे श्याम धनी ॥
यौं राजत कवरी गँथित कच, कनक-कंज-वदनी ।
चिकुर चंद्रिकन बीच अर्ध बिधु, मानौं ग्रसित फनी ॥
सौभग रस सिर स्रवत पनारी, पिय सीमन्त ठनी ।
भृकुटि काम-कोदंड नैंन-सर, कज्जल रेख अनी ॥
तरल तिलक ताटंक गंड पर, नासा जलज मनी।
दसन कुन्द सरसाधर पल्लव, प्रीतम मन समनी ॥
चिबुक मध्य अति चारू सहज सखि, साँवल बिंदुकनी।
प्रीतम प्रान रतन संपुट कुच, कंचुकि कसिब तनी ॥
भुज-मृनाल बल हरत बलय जुत, परस सरस स्रवनी।
श्याम सीस तरु मनु मिडवारी, रची रुचिर रवनी ॥
नाभि गंभीर मीन मोहन मन, खेलन कौं हृदनी।
कृस कटि पृथु नितम्ब किंकिनि व्रत, कदलि-खंभ जघनी ॥
पद अम्बुज जावक जुत भूषन, प्रीतम उर अवनी।
नव-नव भाय विलोभि भाम इभ, बिहरत वर करिनी ॥
(जैश्री) हित हरिवंश प्रसंसत श्यामा, कीरत विशद घनी ।
गावत स्रवनन सुनत सुखाकर, विश्व दुरित दवनी ॥`,
    en: `braja nava taruni kadamba mukuṭamaṇi, śyāmā āju banī।
nakha-śikha lauṁ aṁga-aṅga mādhurī, mōhē śyāma dhanī ॥
yauṁ rājata kavarī gam̐thita kaca, kanaka-kañja-vadanī ।
cikura candrikana bīca ardha bidhu, mānauṁ grasita phanī ॥
saubhaga rasa sira sravata panārī, piya sīmanta ṭhanī ।
bhr̥kuṭi kāma-kōdaṇḍa naiṁna-sara, kajjala rēkha anī ॥
tarala tilaka tāṭaṅka gaṇḍa para, nāsā jalaja manī।
dasana kunda sarasādhara pallava, prītama mana samanī ॥
cibuka madhya ati cārū sahaja sakhi, sām̐vala bindukanī।
prītama prāna ratana saṁpuṭa kuca, kañcuki kasiba tanī ॥
bhuja-mr̥nāla bala harata balaya juta, parasa sarasa sravanī।
śyāma sīsa taru manu miḍavārī, racī rucira ravanī ॥
nābhi gaṁbhīra mīna mōhana mana, khēlana kauṁ hr̥danī।
kr̥sa kaṭi pr̥thu nitamba kiṁkini vrata, kadali-khaṁbha jaghanī ॥
pada ambuja jāvaka juta bhūṣana, prītama ura avanī।
nava-nava bhāya vilōbhi bhāma ibha, biharata vara karinī ॥
(jaiśrī) hita harivaṁśa prasaṁsata śyāmā, kīrata viśada ghanī ।
gāvata sravanana sunata sukhākara, viśva durita davanī ॥`,
    bn: `ব্রজ নব তরুনি কদম্ব মুকুটমণি, শ্যামা আজু বনী।
নখ-শিখ লৌং অঁগ-অঙ্গ মাধুরী, মোহে শ্যাম ধনী ॥
যৌং রাজত কবরী গঁথিত কচ, কনক-কংজ-বদনী ।
চিকুর চংদ্রিকন বীচ অর্ধ বিধু, মানৌং গ্রসিত ফনী ॥
সৌভগ রস সির স্রবত পনারী, পিয় সীমন্ত ঠনী ।
ভ্রুকুটি কাম-কোদণ্ড নৈঁন-সর, কজ্জল রেখ অনী ॥
তরল তিলক তাটংক গংড পর, নাসা জলজ মনী।
দসন কুন্দ সরসাধর পল্লব, প্রীতম মন সমনী ॥
চিবুক মধ্য অতি চারূ সহজ সখি, সাঁবল বিংদুকনী।
প্রীতম প্রান রতন সংপুট কুচ, কংচুকি কসিব তনী ॥
ভুজ-মৃনাল বল হরত বলয় জুত, পরস সরস স্রবনী।
শ্যাম সিস তরু মনু মিডবারী, রচী রুচির রবনী ॥
নাভি গম্ভীর মীন মোহন মন, খেলন কৌং হৃদনী।
কৃস কটি পৃথু নিতম্ব কিংকিনি ব্রত, কদলি-খংভ জঘনী ॥
পদ অম্বুজ জাবক জুত ভূষন, প্রীতম উর অবনী।
নব-নব ভায় বিলোভি ভাম ইভ, বিহরত বর করিনী ॥
(জৈশ্রী) হিত হরিবংশ প্রসংসত শ্যামা, কীরত বিশদ ঘনী ।
গাবত স্রবনন সুনত সুখাকর, বিশ্ব দুরিত দবনী ॥`
  },
  {
    id: 30,
    title: { hi: "पद ३०", en: "Pad 30", bn: "পদ ৩০" },
    hi: `देखत नवनिकुञ्ज सुनि सजनी, लागत है अति चारु।
माधविका केतकी लता लै, रच्यौ मदन आगारु ॥
सरद मास राका निशि सीतल मंद-सुगन्ध-समीर ।
परिमल लुब्ध मधुब्रत विथकित, नदत कोकिला-कीर ॥
बहुविधि रंग मृदुल किसलय दल, निर्मित पिय सखि सेज।
भाजन कनक विविध मधुपूरित, धरे धरनि पर हेज ॥
तापर कुसल किशोर-किशोरी, करत हास-परिहास ।
प्रीतम पानि उरज वर परसत, प्रिया दुरावत वास ॥
कामिनि कुटिल भृकुटि अवलोकत, दिन प्रतिपद प्रतिकूल ।
आतुर अति अनुराग विवस हरि, धाइ धरत भुज-मूल ॥
नागर नीबी-बन्धन मोचत, ऐंचत नील निचोल ।
वधू हठ कोप कपट कहत कल, नेति-नेति मधुबोल ॥
परिरम्भन विपरित रति वितरत, सरस सुरत निजुकेलि।
इन्द्रनील मनिमय तरु मानौं, लसत कनक की बेलि ॥
रतिरन मिथुन ललाट पटल पर, श्रमजल-सीकर संग।
ललितादिक अंचल झकझोरत, मन अनुराग अभंग ॥
जै श्रीहित हरिवंश यथामति बरनत, कृष्ण-रसामृत-सार ।
स्रवन सुनत प्रापक रति राधा, पद-अम्बुज सुकुमार ॥`,
    en: `dēkhata navanikuñja suni sajanī, lāgata hai ati cāru।
mādhavikā kētakī latā lai, racyau madana āgāru ॥
sarada māsa rākā niśi sītala manda-sugandha-samīra ।
parimala lubdha madhubrata vithakita, nadata kōkilā-kīra ॥
bahuvidhi raṅga mr̥dula kisalaya dala, nirmita piya sakhi sēja।
bhājana kanaka vividha madhupūrita, dharē dharani para hēja ॥
tāpara kusala kiśōra-kiśōrī, karata hāsa-parihāsa ।
prītama pāni uraja vara parasata, priyā durāvata vāsa ॥
kāmini kuṭila bhr̥kuṭi avalōkata, dina pratipada pratikūla ।
ātura ati anurāga vivasa hari, dhāi dharata bhuja-mūla ॥
nāgara nībī-bandhana mōcata, aiṁcata nīla nicōla ।
vadhū haṭha kōpa kapaṭa kahata kala, nēti-nēti madhubōla ॥
parirambhana viparita rati vitarata, sarasa surata nijukēli।
indranīla manimaya taru mānauṁ, lasata kanaka kī bēli ॥
ratirana mithuna lalāṭa paṭala para, śramajala-sīkara saṅga।
lalitādika añcala jhakajhōrata, mana anurāga abhaṅga ॥
jai śrīhita harivaṁśa yathāmati baranata, kr̥ṣṇa-rasāmr̥ta-sāra ।
sravana sunata prāpaka rati rādhā, pada-ambuja sukumāra ॥`,
    bn: `দেখত নবনিকুঞ্জ সুনি সজনী, লাগত হৈ অতি চারু।
মাধবিকা কেতকী লতা লৈ, রচৌ মদন আগারু ॥
সরদ মাস রাকা নিশি সীতল মন্দ-সুগন্ধ-সমীর ।
পরিমল লুব্ধ মধুব্রত বিথকিত, নদত কোকিলা-কীর ॥
বহুবিধি রঙ্গ মৃদুল কিসলয় দল, নির্মিত পিয় সখি সেজ।
ভাজন কনক বিবিধ মধুপূরিত, ধরে ধরনি পর হেজ ॥
তাপুর কুসল কিশোর-কিশোরী, করত হাস-পরিহাস ।
প্রীতম পানি উরজ বর পরসত, প্রিয়া দুরাবত বাস ॥
কামিনি কুটিল ভ্রুকুটি অবলোকত, দিন প্রতিপদ প্রতিকূল ।
আতুর অতি অনুরাগ বিবস হরি, ধাই ধরত ভুজ-মূল ॥
নাগর নীবী-বন্ধন মোচত, ঐংচত নীল নিচোল ।
বধু হঠ কোপ কপট কহত কল, নেতি-নেতি মধুবোল ॥
পরিরম্ভন বিপরিত রতি বিতরত, সরস সুরত নিজুকেলি।
ইন্দ্রনীল মনিময় তরু মানৌং, লসত কনক কী বেলি ॥
রতিরন মিথুন ললাট পটল পর, শ্রমজল-সীকর সংগ।
ললিতাদিক অংচল ঝকঝোরত, মন অনুরাগ অভংগ ॥
জৈ শ্রীহিত হরিবংশ যথামতি বরনত, কৃষ্ণ-রসামৃত-সার ।
স্রবন সুনত প্রাপক রতি রাধা, পদ-অম্বুজ সুকুমার ॥`
  },
  {
    id: 31,
    title: { hi: "पद ३१", en: "Pad 31", bn: "পদ ৩১" },
    hi: `आज अति राजत दम्पति भोर ।
सुरत रंग के रस में भीने, नागरि-नवल किशोर ॥
अंसन पर भुज दिये परस्पर, लोचन तृषित चकोर ।
करत पान रस मत्त विलोकत, इन्दुबदन विवि ओर ॥
छूटी लटन लाल मन करष्यौ, ये याके चित चोर ।
परिरम्भन-चुम्बन मिल गावत, सुर मंदर कलघोर ॥
पग डगमगत चलत वन बिहरत, रुचिर कुञ्ज घनखोर ।
जै श्रीहित हरिवंश लाल-ललना मिलि, हियौ सिरावत मोर ॥`,
    en: `āju ati rājata dampati bhōra ।
surata raṅga kē rasa mēṁ bhīnē, nāgari-navala kiśōra ॥
aṁsana para bhuja diyē paraspara, lōcana tr̥ṣita cakōra ।
karata pāna rasa matta vilōkata, indubadana vivi ōra ॥
chūṭī laṭana lāla mana karaṣyau, yē yākē cita cōra ।
parirambhana-cumbana mila gāvata, sura mandara kalaghōra ॥
paga ḍagamagata calata vana biharata, rucira kuñja ghanakhōra ।
jai śrīhita harivaṁśa lāla-lalanā mili, hiyau sirāvata mōra ॥`,
    bn: `আজ অতি রাজত দম্পতি ভোর ।
সুরত রঙ্গ কে রস মেঁ ভীনে, নাগরি-নবল কিশোর ॥
অংসন পর ভুজ দিয়ে পরস্পর, লোচন তৃषित চকোর ।
করত পান রস মত্ত বিলোকত, ইন্দুবদন বিবি ওর ॥
ছূটী লটন লাল মন করষ্যৌ, যে যাকে চিত চোর ।
পরিরম্ভন-চুম্বন মিল গাবত, সুর মন্দর কলঘোর ॥
পগ ডগমগত চলত বন বিহরত, রুচির কুঞ্জ ঘনখোর ।
জৈ শ্রীহিত হরিবংশ লাল-ললনা মিলি, হিয়ৌ সিরাবত মোর ॥`
  },
  {
    id: 32,
    title: { hi: "पद ३२", en: "Pad 32", bn: "পদ ৩২" },
    hi: `आजु वन क्रीड़त श्यामा-श्याम ।
सुभग बनी निशि शरद चाँदनी, रुचिर कुञ्ज अभिराम ॥
खंडन अधर करत परिरम्भन, ऐंचत जघन दुकूल ।
उर नख-पात तिरीछी चितवन, दंपति रस समतूल ॥
वे भुज पीन पयोधर परसत, वामदृशा पिय हार।
बसनन पीक अलक आकर्षत, समर-स्रमित सतमार ॥
पल-पल प्रबल चौंप रस-लम्पट, अति सुन्दर सुकुमार ।
(जैश्री) हित हरिवंश आजु तृण टूटत, हौं बलि विशद बिहार ॥`,
    en: `āju vana krīṛata śyāmā-śyāma ।
subhaga banī niśi śarada cām̐danī, rucira kuñja abhirāma ॥
khaṇḍana adhara karata parirambhana, aiṁcata jaghana dukūla ।
ura nakha-pāta tirīchī citavana, daṁpati rasa samatūla ॥
vē bhuja pīna payōdhara parasata, vāmadṛśā piya hāra।
basanana pīka alaka ākarṣata, samara-sramita satamāra ॥
pala-pala prabala cauṁpa rasa-lampaṭa, ati sundara sukumāra ।
(jaiśrī) hita harivaṁśa āju tṛṇa ṭūṭata, hauṁ bali viśada bihāra ॥`,
    bn: `আজু বন ক্রীড়ত শ্যামা-শ্যাম ।
সুভগ বনী নিশি শরদ চাঁদনী, রুচির কুঞ্জ অভিরাম ॥
খংডন অধর করত পরিরম্ভন, ঐংচত জঘন দুকূল ।
উর নখ-পাত তিরীছী চিতবন, দম্পতি রস সমতূল ॥
বে ভুজ পীন পয়োধর পরসত, বামদৃশা পিয় হার।
বসনন পীক অলক আকর্ষত, সমর-শ্রমিত সতমার ॥
পল-পল প্রবল চৌঁপ রস-লম্পট, অতি সুন্দর সুকুমার ।
(জৈশ্রী) হিত হরিবংশ আজু তৃণ টূটত, হৌঁ বলি বিশদ বিহার ॥`
  },
  {
    id: 33,
    title: { hi: "पद ३३", en: "Pad 33", bn: "পদ ৩৩" },
    hi: `आजु वन राजत जुगल किशोर ।
नंदनंदन वृषभानु नन्दिनी उठे उनींदे भोर ॥
डगमगात पग परत सिथिल गति, परसत नख-ससि-छोर ।
दसन-वसन खंडित मषि मंडित, गंड तिलक कछु थोर ॥
दुरत न कच-करजन के रोके, अरुन नैंन अलि चोर ।
(जैश्री) हित हरिवंश सँभार न तन-मन, सुरत-समुद्र झकोर ॥`,
    en: `āju vana rājata jugala kiśōra ।
naṁdanaṁdana vṛṣabhānu nandinī uṭhē unīndē bhōra ॥
ḍagamagāta paga parata sithila gati, parasata nakha-sasi-chōra ।
dasana-vasana khaṇḍita maṣi maṇḍita, gaṇḍa tilaka kachu thōra ॥
durata na kaca-karajana kē rōkē, aruna naiṁna ali cōra ।
(jaiśrī) hita harivaṁśa sam̐bhāra na tana-mana, surata-samudra jhakōra ॥`,
    bn: `আজু বন রাজত জুগল কিশোর ।
নন্দনন্দন বৃষভানু নন্দিনী উঠে উনীংদে ভোর ॥
ডগমগাত পগ পরত সিথিল গতি, পরসত নখ-সসি-ছোর ।
দসন-বসন খংডিত মষি মংডিত, গংড তিলক কছু থোর ॥
দুরত ন কচ-করজন কে রোকে, অরুন নৈঁন অলি চোর ।
(জৈশ্রী) হিত হরিবংশ সঁভার ন তন-মন, সুরত-সমুদ্র ঝকোর ॥`
  },
  {
    id: 34,
    title: { hi: "पद ३४", en: "Pad 34", bn: "পদ ৩৪" },
    hi: `वन की कुञ्जन-कुञ्जन डोलन ।
निकसत निपट साँकरी बीथिन, परसत नाहि निचोलन ॥
प्रात काल रजनी सब जागे, सूचत सुख दृग लोलन ।
आलसवन्त अरुण अति व्याकुल, कछु उपजत गति गोलन ॥
निर्त्तन भृकुटि बदन अम्बुज मृदु, सरस हास मधु बोलन ।
अति आसक्त लाल अलि लम्पट, बस कीने बिनु मोलन ॥
बिलुलित सिथिल श्याम छूटी लट, राजत रुचिर कपोलन ।
रति विपरित चुम्बन परिरम्भन, चिबुक चारु टक टोलन ॥
कबहुँ स्रमित किसलय सिज्या पर, मुख अंचल झक झोलन।
दिन हरिवंश दासि हिय सींचत, वारिध केलि कलोलन ॥`,
    en: `vana kī kuñjana-kuñjana ḍōlana ।
nikasata nipaṭa sām̐karī bīthina, parasata nāhi nicōlana ॥
prāta kāla rajanī saba jāgē, sūcata sukha dṛga lōlana ।
ālasavanta aruṇa ati vyākula, kachu upajata gati gōlana ॥
nirttana bhṛkuṭi badana ambuja mṛdu, sarasa hāsa madhu bōlana ।
ati āsakta lāla ali lampaṭa, basa kīnē binu mōlana ॥
bilulita sithila śyāma chūṭī laṭa, rājata rucira kapōlana ।
rati viparita cumbana parirambhana, cibuka cāru ṭaka ṭōlana ॥
kabahuṁ sramita kisalaya sijyā para, mukha añcala jhaka jhōlana।
dina harivaṁśa dāsi hiya sīñcata, vāridha kēli kalōlana ॥`,
    bn: `বন কী কুঞ্জুন-কুঞ্জুন ডোলন ।
নিকসত নিপট সাঁকরী বীথিন, পরসত নাহি নিচোলন ॥
প্রাত কাল রজনী সব জাগে, সূচত সুখ দৃগ লোলন ।
আলসবন্ত অরুণ অতি ব্যাকুল, কছু উপজত গতি গোলন ॥
নিৰ্ত্তন ভ্রুকুটি বদন অম্বুজ মৃদু, সরস হাস মধু বোলন ।
অতি আসক্ত লাল অলি লম্পট, বস কীনে বিনু মোলন ॥
বিলুলিত সিথিল শ্যাম ছুটী লট, রাজত রুচির কপোলন ।
রতি বিপরিত চুম্বন পরিরম্ভন, চিবুক চারু টক টোলন ॥
কবহুঁ শ্রমিত কিসলয় সিজ্যা পর, মুখ অংচল ঝক ঝোলন।
দিন হরিবংশ দাসি হিয় সীংচত, বারিধ কেলি কলোলন ॥`
  },
  {
    id: 35,
    title: { hi: "पद ३५", en: "Pad 35", bn: "পদ ৩৫" },
    hi: `झूलत दोऊ नवल किशोर ।
रजनी-जनित रंग सुख सूचत, अंग-अंग उठि भोर ॥
अति अनुराग भरे मिलि गावत, सुर मंदर कल घोर ।
बीच-बीच प्रीतम चित चोरत, प्रिया नैंन की कोर ॥
अबला अति सुकुमार डरत मन, वर हिंडोर झकोर।
पुलकि-पुलकि प्रीतम उर लागत, दै नव उरज अँकोर ।
अरुझी विमल माल कंकन सौं, कुंडल सौं कच डोर।
वेपथ जुत क्यौं बनें विवेचत, आनंद बढ्यौ न थोर ॥
निरखि-निरखि फूलत ललितादिक, विवि मुख चन्द्र चकोर ।
दै असीस हरिवंश प्रसंसत, करि अंचल की छोर ॥`,
    en: `jhūlata dōū navala kiśōra ।
rajanī-janita raṅga sukha sūcata, aṅga-aṅga uṭhi bhōra ॥
ati anurāga bharē mili gāvata, sura mandara kala ghōra ।
bīca-bīca prītama cita cōrata, priyā naiṁna kī kōra ॥
abalā ati sukumāra ḍarata mana, vara hiṇḍōra jhakōra।
pulaki-pulaki prītama ura lāgata, dai nava uraja aṁkōra ।
arujhī vimala māla kaṁkana sauṁ, kuṇḍala sauṁ kaca ḍōra।
vēpatha juta kyauṁ banēṁ vivēcata, ānanda baḍhyau na thōra ॥
nirakhi-nirakhi phūlata lalitādika, vivi mukha candra cakōra ।
dai asīsa harivaṁśa prasaṁsata, kari añcala kī chōra ॥`,
    bn: `ঝুলত দোঊ নবল কিশোর ।
রজনী-জনিত রঙ্গ সুখ সূচত, অঙ্গ-অঙ্গ উঠি ভোর ॥
অতি অনুরাগ ভরে মিলি গাবত, সুর মন্দর কল ঘোর ।
বীচ-বীচ প্রীতম চিত চোরত, প্রিয়া নৈঁন কী কোর ॥
অবলা অতি সুকুমার ডরত মন, বর হিণ্ডোর ঝকোর।
পুলকি-পুলকি প্রীতম উর লাগত, দৈ নব উরজ অঁকোর ।
অরুঝী বিমল মাল কংকন সৌং, কুণ্ডল সৌং কচ ডোর।
বেপথ জুত ক্যৌং বনেং বিবেচত, আনংদ বঢ্যৌ ন থোর ॥
নিরখি-নিরখি ফুলত ললিতাদিক, বিবি মুখ চন্দ্র চকোর ।
দৈ অসীস হরিবংশ প্রসংসত, করি অংচল কী ছোর ॥`
  },
  {
    id: 36,
    title: { hi: "पद ३६", en: "Pad 36", bn: "পদ ৩৬" },
    hi: `आज वन नीकौ रास बनायौ ।
पुलिन पवित्र सुभग यमुना-तट, मोहन बेनु बजायौ ॥
कल कंकन किंकिनि नूपुर धुनि, सुनि खग-मृग सचु पायौ ।
जुवतिनु मण्डल मध्य श्याम घन, सारँग राग जमायौ ॥
ताल मृदंग उपंग मुरज डफ, मिलि रस-सिन्धु बढ़ायौ।
विविध विसद वृषभानुनन्दिनी, अंग सुधंग दिखायौ ॥
अभिनय-निपुन लटकि लट लोचन, भृकुटि अनंग नचायौ
ताताथेई ताथेई धरत नूतन गति, पति ब्रजराज रिझायौ
सकल उदार नृपति चूड़ामणि, सुख-वारिद बरसायौ
परिरम्भन चुम्बन आलिंगन, उचित जुवतिजन पायौ
बरसत कुसुम मुदित नभनायक, इन्द्र निसान बजायौ
जैश्री हित हरिवंश रसिक राधापति, जस-वितान जग छायौ`,
    en: `āja vana nīkau rāsa banāyau ।
pulina pavitra subhaga yamunā-taṭa, mōhana bēnu bajāyau ॥
kala kaṁkana kiṁkini nūpura dhuni, suni khaga-mṛga sacu pāyau ।
juvatinu maṇḍala madhya śyāma ghana, sāraṁga rāga jamāyau ॥
tāla mṛdaṅga upaṅga muraja ḍapha, mili rasa-sindhu baṛhāyau।
vividha visada vṛṣabhānunandinī, aṅga sudhaṅga dikhāyau ॥
abhinaya-nipuna laṭaki laṭa lōcana, bhṛkuṭi anaṅga nacāyau
tātāthēī tāthēī dharata nūtana gati, pati brajarāja rijhāyau
sakala udāra nṛpati cūṛāmaṇi, sukha-vārida barasāyau
parirambhana cumbana āliṅgana, ucita juvatijana pāyau
barasata kusuma mudita nabhānāyaka, indra nisāna bajāyau
jaiśrī hita harivaṁśa rasika rādhāpati, jasa-vitāna jaga chāyau`,
    bn: `আজ বন নীকৌ রাস বনায়ৌ ।
পুলিন পবিত্র সুভগ যমুনা-তট, মোহন বেনু বজায়ৌ ॥
কল কংকন কিংকিনি নূপুর ধুনি, সুনি খগ-মৃগ সচু পায়ৌ ।
জুবতিনু মংডল মধ্য শ্যাম ঘন, সারংগ রাগ জমায়ৌ ॥
তাল মৃদংগ উপংগ মুরজ ডফ, মিলি রস-সিন্ধু বঢ়ায়ৌ।
বিবিধ বিসদ বৃষভানুনন্দিনী, অংগ সুধংগ দিখায়ৌ ॥
অভিনয়-নিপুন লটকি লট লোচন, ভ্রুকুটি অনংগ নচায়ৌ
তাতাতেই তাতেই ধরত নূতন গতি, পতি ব্রজরাজ রিঝায়ৌ
সকল উদার নৃপতি চূড়ামণি, সুখ-বারিদ বরসায়ৌ
পরিরম্ভন চুম্বন আলিঙ্গন, উচিত জুবতিজন পায়ৌ
বরসত কুসুম মুদিত নভনায়ক, ইন্দ্র নিসান বজায়ৌ
জৈশ্রী হিত হরিবংশ রসিক রাধাপতি, জস-বিতান জগ ছায়ৌ`
  },
  {
    id: 37,
    title: { hi: "पद ३७", en: "Pad 37", bn: "পদ ৩৭" },
    hi: `चलहि किन मानिनि कुञ्ज कुटीर ।
तो बिनु कुँवर कोटि बनिता-जुत, मथन मदन की पीर ॥
गद-गद सुर विरहाकुल पुलकित, स्रवत बिलोचन नीर।
क्वासि-क्वासि वृषभानु नन्दिनी, बिलपत विपिन अधीर ॥
वंशी विसिख व्याल मालावलि, पंचानन पिक कीर।
मलयज गरल हुतासन मारुत, साखामृग-रिपु चीर ॥
जैश्रीहित हरिवंश परम कोमल चित, चपल चली पिय तीर।
सुनि भयभीत बज्र कौ पंजर, सुरत सूर रणधीर ॥`,
    en: `calahi kina mānini kuñja kuṭīra ।
tō binu kum̐vara kōṭi banitā-juta, mathana madana kī pīra ॥
gada-gada sura virahākula pulakita, sravata bilōcana nīra।
kvāsi-kvāsi vṛṣabhānu nandinī, bilapata vipina adhīra ॥
vaṁśī visikha vyāla mālāvali, pañcānana pika kīra।
malayaja garala hutāsana māruta, sākhāmṛga-ripu cīra ॥
jaiśrīhita harivaṁśa parama kōmala cita, capala calī piya tīra।
suni bhayabhīta bajra kau pañjara, surata sūra raṇadhīra ॥`,
    bn: `চলহি কিন মানিনি কুঞ্জ কুটীর ।
তো বিনু কুঁবর কোটি বনিতা-জুত, মথন মদন কী পীর ॥
গদ-গদ সুর বিরহাকুল পুলকিত, স্রবত বিলোচন নীর।
ক্বাসি-ক্বাসি বৃষভানু নন্দিনী, বিলপত বিপিন অধীর ॥
বংশী বিসিখ ব্যাল মালাবলি, পঞ্চানন পিক কীর।
মলয়জ গরল হুতাসন মারুত, সাখামৃগ-রিপু চীর ॥
জৈশ্রীহিত হরিবংশ পরম কোমল চিত, চপল চলী পিয় তীর।
সুনি ভয়ভীত বজ্র কৌ পংজর, সুরত সূর রণধীর ॥`
  },
  {
    id: 38,
    title: { hi: "पद ३८", en: "Pad 38", bn: "পদ ৩৮" },
    hi: `बेगि चलहि उठि गहर करत कत, निकुञ्ज बुलावत लाल ।
हा राधा-राधिका पुकारत, निरखि मदन गज ढाल ॥
करत सहाय शरद शशि मारुत, फूटि मिली उर माल ।
दुर्गम तकत समर अति कातर, करहि न पिय प्रतिपाल ॥
(जैश्री) हित हरिवंश चली अति आतुर, स्रवन सुनत तेहि काल ।
लै राखे गिरि-कुच बिच सुन्दर, सुरत-सूर ब्रजबाल॥`,
    en: `bēgi calahi uṭhi gahara karata kata, nikuñja bulāvata lāla ।
hā rādhā-rādhikā pukārata, nirakhi madana gaja ḍhāla ॥
karata sahāya śarada śaśi māruta, phūṭi milī ura māla ।
durgama takata samara ati kātara, karahi na piya pratipāla ॥
(jaiśrī) hita harivaṁśa calī ati ātura, sravana sunata tēhi kāla ।
lai rākhē giri-kuca bica sundara, surata-sūra brajabāla॥`,
    bn: `বেগি চলহি উঠি গহর করত কত, নিকুঞ্জ বুলাবত লাল ।
হা রাধা-রাধিকা পুকারত, নিরখি মদন গজ ঢাল ॥
করত সহায় শরদ শশি মারুত, ফুটি মিলী উর মাল ।
দুর্গম তকত সমর অতি কাতার, করহি ন পিয় প্রতিপাল ॥
(জৈশ্রী) হিত হরিবংশ চলী অতি আতুর, শ্রবন সুনত তেহি কাল ।
লৈ রাখে গিরি-কুচ বিচ সুন্দর, সুরত-সূর ব্রজবাল॥`
  },
  {
    id: 39,
    title: { hi: "पद ३९", en: "Pad 39", bn: "পদ ৩৯" },
    hi: `रचि निकुञ्ज भवन
सीतल पवन
खेल्यौ लाल चाहत रवन
रजनी सरद मंद सौरभ सौं, रचि अपने हाथ सँवार्यो,
बिनु कुँवरि काम की वेदन, मेटव कवन
न चपल बाल-मृगर्नैनी, तजिव मवन
तो चलहि
जै श्रीहित हरिवंश मिलव प्यारे की, आरति-दवन`,
    en: `raci nikuñja bhavana
sītala pavana
khēlyau lāla cāhata ravana
rajanī sarada manda saurabha sauṁ, raci apanē hātha sam̐vāryō,
binu kum̐vari kāma kī vēdana, mēṭava kavana
na capala bāla-mṛgarnainī, tajiva mavana
tō calahi
jai śrīhita harivaṁśa milava pyārē kī, ārati-davana`,
    bn: `রচি নিকুঞ্জ ভবন
সীতল পবন
খেল্যৌ লাল চাহত রবন
রজনী সরদ মন্দ সৌরভ সৌং, রচি অপনে হাথ সঁবার্যৌ,
বিনু কুঁবরি কাম কী বেদন, মেটব কবন
ন চপল বাল-মৃগর্নৈনী, তজিব মবন
তো চলহি
জৈ শ্রীহিত হরিবংশ মিলব প্যারে কী, আরতি-দবন`
  },
  {
    id: 40,
    title: { hi: "पद ४०", en: "Pad 40", bn: "পদ ৪০" },
    hi: `बैठे लाल निकुञ्ज भवन ।
रजनी रुचिर मल्लिका मुकुलित, त्रिविध पवन
तू सखि काम केलि मनमोहन, मदन दवन
वृथा गहर कत करत कृसोदरि, कारन कवन
चपल चली तन की सुध बिसरी, सुनत श्रवन
जैश्रीहितहरिवंश मिले रस-लंपट, राधिका रवन`,
    en: `baiṭhē lāla nikuñja bhavana ।
rajanī rucira mallikā mukulita, trividha pavana
tū sakhi kāma kēli manamōhana, madana davana
vṛthā gahara kata karata kṛsōdari, kārana kavana
capala calī tana kī sudha bisarī, sunata śravana
jaiśrīhitaharivaṁśa milē rasa-lampaṭa, rādhikā ravana`,
    bn: `বৈঠে লাল নিকুঞ্জ ভবন ।
রজনী রুচির মল্লিকা মুকুলিত, ত্রিবিধ পবন
তূ সখি কাম কেলি মনমোহন, মদন দবন
বৃথা গহর কত করত কৃসোদরি, কারন কবন
চপল চলী তন কী সুধ বিসরী, সুনত শ্রবন
জৈশ্রীহিতহরিবংশ মিলে রস-লম্পট, রাধিকা রবন`
  },
  {
    id: 41,
    title: { hi: "पद ४१", en: "Pad 41", bn: "পদ ৪১" },
    hi: `प्रीति की रीति रँगीलौई जानै ।
जद्यपि सकल लोक चूड़ामणि, दीन अपनपौ मानै ॥
यमुना पुलिन निकुञ्ज भवन में, मान मानिनी ठानै ।
निकट नवीन कोटि कामिनि कुल, धीरज मनहि न आनै ॥
नस्वर नेह चपल मधुकर ज्यौं, आन-आन सौं बानै ।
जैश्रीहित हरिवंश चतुर सोई लालहिं, छाँड़ि मैड़ पहिचानै ॥`,
    en: `prīti kī rīti ram̐gīlauī jānai ।
jadyapi sakala lōka cūṛāmaṇi, dīna apanapau mānai ॥
yamunā pulina nikuñja bhavana mēṁ, māna māninī ṭhānai ।
nikaṭa navīna kōṭi kāmini kula, dhīraja manahi na ānai ॥
nasvara nēha capala madhukara jyauṁ, āna-āna sauṁ bānai ।
jaiśrīhita harivaṁśa catura sōī lālahiṁ, chām̐ṛi maiṛa pahicānai ॥`,
    bn: `প্রীতি কী রীতি রঁগীলৌঈ জানৈ ।
জদ্যপি সকল লোক চূড়ামণি, দীন অপনপৌ মানৈ ॥
যমুনা পুলিন নিকুঞ্জ ভবন মেঁ, মান মানিনী ঠানৈ ।
নিকট নবীন কোটি কামিনি কুল, ধীরজ মনহি ন আনৈ ॥
নস্বর নেহ চপল মধুকর জ্যৌঁ, আন-আন সৌঁ বানৈ ।
জৈশ্রীহিত হরিবংশ চতুর সোঈ লালহিঁ, ছাঁড়ি মৈড় পহিচানৈ ॥`
  },
  {
    id: 42,
    title: { hi: "पद ४२", en: "Pad 42", bn: "পদ ৪২" },
    hi: `प्रीति न काहू की कानि विचारै ।
मारग अपमारग विथकित मन, को अनुसरत निवारै ॥
ज्यौं सरिता सावन जल उमगत, सनमुख सिन्धु सिधारै।
ज्यौं नादहि मन दिये कुरंगन, प्रगट पारधी मारै ॥
जै श्रीहित हरिवंश हिलग सारंग ज्यौं, सलभ सरीरहि जारै।
नाइक निपुन नवल मोहन बिनु, कौन अपनपौ हारै ॥`,
    en: `prīti na kāhū kī kāni vicārai ।
māraga apamāraga vithakita mana, kō anusarata nivārai ॥
jyauṁ saritā sāvana jala umagata, sanamukha sindhu sidhārai।
jyauṁ nādahi mana diyē kuraṅgana, pragaṭa pāradhī mārai ॥
jai śrīhita harivaṁśa hilaga sāraṅga jyauṁ, salabha sarīrahi jārai।
nāika nipuna navala mōhana binu, kauna apanapau hārai ॥`,
    bn: `প্রীতি ন কাহূ কী কানি বিচারৈ ।
মারগ অপমারগ বিথকিত মন, কো অনুসরত নিবারৈ ॥
জ্যৌঁ সরিতা সাবন জল উমগত, সনমুখ সিন্ধু সিধারৈ।
জ্যৌঁ নাদহি মন দিয়ে কুরঙ্গন, প্রগট পারধী মারৈ ॥
জৈ শ্রীহিত হরিবংশ হিলগ সারঙ্গ জ্যৌঁ, সলভ সরীরহি জারৈ।
নাইক নিপুন নবল মোহন বিনু, কৌন অপনপৌ হারৈ ॥`
  },
  {
    id: 43,
    title: { hi: "पद ४३", en: "Pad 43", bn: "পদ ৪৩" },
    hi: `अति नागरि वृषभानु किशोरी ।
सुन दूतिका चपल मृगर्नैनी, आकर्षत चितवत चित गोरी ॥
श्रीफल उरज कंचन-सी देही, कटि केहरि गुण-सिंधु-झकोरी
बैंनी भुजंग चन्द्रसत बदनी, कदलि जंघ जलचर गति चोरी ॥
सुनि हरिवंश आज रजनी-मुख, बन मिलाइ मेरी निज जोरी
जद्यपि मान समेत भामिनी, सुनि कत रहत भली जिय भोरी ॥`,
    en: `ati nāgari vṛṣabhānu kiśōrī ।
suna dūtikā capala mṛgarnainī, ākarṣata citavata cita gōrī ॥
śrīphala uraja kañcana-sī dēhī, kaṭi kēhari guṇa-sindhu-jhakōrī
bainī bhujaṅga candrasata badanī, kadali jaṅgha jalacara gati cōrī ॥
suni harivaṁśa āja rajanī-mukha, bana milāi mērī nija jōrī
jadyapi māna samēta bhāminī, suni kata rahata bhalī jiya bhōrī ॥`,
    bn: `অতি নাগরি বৃষভানু কিশোরী ।
সুন দূতিকা চপল মৃগর্নৈনী, আকর্ষত চিতবত চিত গোরী ॥
শ্রীফল উরজ কঞ্চন-সী দেহী, কটি কেহরি গুণ-সিন্ধু-ঝকোরী
বৈঁনী ভুজঙ্গ চন্দ্রসত বদনী, কদলি জঙ্ঘ জলচর গতি চোরী ॥
সুনি হরিবংশ আজ রজনী-মুখ, বন মিলাই মেরী নিজ জোরী
জদ্যপি মান সমেত ভামিনী, সুনি কত রহত ভলী জিয় ভোরী ॥`
  },
  {
    id: 44,
    title: { hi: "पद ४४", en: "Pad 44", bn: "পদ ৪৪" },
    hi: `चलि सुन्दरि बोली वृन्दावन ।
कामिनि कण्ठ लागि किन राजहि, तू दामिनि मोहन नूतन घन ॥
कंचुकि सुरंग विविध रंग सारी, नख-जुग-ऊन बने तेरे तन
ये सब उचित नवल मोहन कौं, श्रीफल कुच जोवन आगम-धन ॥
अतिसय प्रीति हुती अन्तर गति, जै श्रीहित हरिवंश चली मुकुलित मन
निविड़ निकुञ्ज मिले रस-सागर, जीते सत रतिराज सुरत रन ॥`,
    en: `cali sundari bōlī vṛndāvana ।
kāmini kaṇṭha lāgi kina rājahi, tū dāmini mōhana nūtana ghana ॥
kañcuki suraṅga vividha raṅga sārī, nakha-juga-ūna banē tērē tana
yē saba ucita navala mōhana kauṁ, śrīphala kuca jōvana āgama-dhana ॥
atisaya prīti hutī antara gati, jai śrīhita harivaṁśa calī mukulita mana
niviṛa nikuñja milē rasa-sāgara, jītē sata ratirāja surata rana ॥`,
    bn: `চলি সুন্দরি বোলী বৃন্দাবন ।
কামিনি কণ্ঠ লাগি কিন রাজহি, তূ দামিনি মোহন নূতন ঘন ॥
কঞ্চুকি সুরঙ্গ বিবিধ রঙ্গ সারী, নখ-জুগ-ঊন বনে তেরে তন
যে সব উচিত নবল মোহন কৌঁ, শ্রীফল কুচ জোবন আগম-ধন ॥
অতিসয় প্রীতি হুতী অন্তর গতি, জৈ শ্রীহিত হরিবংশ চলী মুকুলিত মন
নিবিড় নিকুঞ্জ মিলে রস-সাগর, জীতে সত রতিরাজ সুরত রন ॥`
  },
  {
    id: 45,
    title: { hi: "पद ४५", en: "Pad 45", bn: "পদ ৪৫" },
    hi: `आवत श्रीवृषभानु दुलारी ।
रूप-रासि अति चतुर-शिरोमणि अंग-अंग सुकुमारी ॥
प्रथम उबटि मज्जन करि सज्जित, नील-बरन तन सारी ।
गूँथित अलक तिलक कृत सुन्दर, सैंदुर माँग सँवारी ॥
मृगज समान नैंन अंजन जुत, रुचिर रेख अनुसारी ।
जटित लवंग ललित नासा पर, दसनावलि कृत कारी ॥
श्रीफल उरज करूँभी कंचुकि कसि, ऊपर हार छबि न्यारी।
कृस कटि उदर गंभीर नाभिपुट, जघन नितम्बन भारी ॥
मनौं मृनाल भूषन भूषित भुज श्याम अंस पर डारी ।
जै श्रीहित हरिवंश जुगल करिनी-गज बिहरत वन पिय-प्यारी ॥`,
    en: `āvata śrīvṛṣabhānu dulārī ।
rūpa-rāsi ati catura-śirōmaṇi aṅga-aṅga sukumārī ॥
prathama ubaṭi majjana kari sajjita, nīla-barana tana sārī ।
gūm̐thita alaka tilaka kṛta sundara, saiṁdura mām̐ga sam̐vārī ॥
mṛgaja samāna naiṁna añjana juta, rucira rēkha anusārī ।
jaṭita lavaṅga lalita nāsā para, dasanāvali kṛta kārī ॥
śrīphala uraja karūm̐bhī kañcuki kasi, ūpara hāra chabi nyārī।
kṛsa kaṭi udara gaṁbhīra nābhipuṭa, jaghana nitambana bhārī ॥
manauṁ mṛnāla bhūṣana bhūṣita bhuja śyāma aṁsa para ḍārī ।
jai śrīhita harivaṁśa jugala karinī-gaja biharata vana piya-pyārī ॥`,
    bn: `আবত শ্রীবৃষভানু দুলারী ।
রূপ-রাসি অতি চতুর-শিরোমণি অঙ্গ-অঙ্গ সুকুমারী ॥
প্রথম উবটি মজ্জন করি সজ্জিত, নীল-বরন তন সারী ।
গূঁথিত অলক তিলক কৃত সুন্দর, সৈংদুর মাঁগ সঁবারী ॥
মৃগজ সমান নৈঁন অংজন জুত, রুচির রেখ অনুসারী ।
জটিত লবংগ ললিত নাসা পর, দসনাবলি কৃত কারী ॥
শ্রীফল উরজ করূঁভী কঞ্চুকি কসি, ঊপর হার ছবি ন্যারী।
কৃস কটি উদর গংভীর নাভিপুট, জঘন নিতম্বন ভারী ॥
মনৌং মৃনাল ভূষন ভূষিত ভুজ শ্যাম অংস পর ডারী ।
জৈ শ্রীহিত হরিবংশ জুগল করিনী-গজ বিহরত বন পিয়-প্যারী ॥`
  },
  {
    id: 46,
    title: { hi: "पद ४६", en: "Pad 46", bn: "পদ ৪৬" },
    hi: `विपिन घन कुञ्ज रति केलि भुज मेलि रुचि,
श्याम-श्यामा मिले शरद की जामिनी ।
हृदै अति फूल सम तूल पिय नागरी,
करिनि-करि मत्त मनौं विविध गुन रामिनी
सरस गति हास-परिहास आवेस बस,
दलित दल मदन-बल कोक रस कामिनी ।
जै श्रीहित हरिवंश सुनि लाल लावन्य भिदे,
प्रिया अति सूर सुख सुरत संग्रामिनी ॥`,
    en: `vipina ghana kuñja rati kēli bhuja mēli ruci,
śyāma-śyāmā milē śarada kī jāminī ।
hṛdai ati phūla sama tūla piya nāgarī,
karini-kari matta manauṁ vividha guna rāminī
sarasa gati hāsa-parihāsa āvēsa basa,
dalita dala madana-bala kōka rasa kāminī ।
jai śrīhita harivaṁśa suni lāla lāvanya bhidē,
priyā ati sūra sukha surata saṅgrāminī ॥`,
    bn: `বিপিন ঘন কুঞ্জ রতি কেলি ভুজ মেলি রুচি,
শ্যাম-শ্যামা মিলে শরদ কী জামিনী ।
হৃদৈ অতি ফুল সম তূল পিয় নাগরী,
করিনি-করি মত্ত মনৌং বিবিধ গুন রামিনী
সরস গতি হাস-পরিহাস আবেস বস,
দলিত দল মদন-বল কোক রস কামিনী ।
জৈ শ্রীহিত হরিবংশ সুনি লাল লাবন্য ভিদে,
প্রিয়া অতি সূর সুখ সুরত সংগ্রামিনী ॥`
  },
  {
    id: 47,
    title: { hi: "पद ४७", en: "Pad 47", bn: "পদ ৪৭" },
    hi: `बन की लीला लालहिं भावै ।
पत्न-प्रसून बीच प्रतिबिंबहिं, नख-सिख प्रिया जनावै॥
सकुच न सकत प्रगट परिरम्भन, अलि लम्पट दुरि धावै
संभ्रम देत कुलक कल कामिनि, रति-रण- कलह मचावै ॥
उलटी सबै समुझि नैनन में, अंजन रेख बनावै।
जै श्रीहित हरिवंश प्रीति रीति बस, सजनी श्याम कहावै ॥`,
    en: `bana kī līlā lālahiṁ bhāvai ।
patna-prasūna bīca pratibiṁbahiṁ, nakha-sikha priyā janāvai॥
sakuca na sakata pragaṭa parirambhana, ali lampaṭa duri dhāvai
saṁbhrama dēta kulaka kala kāmini, rati-raṇa- kalaha macāvai ॥
ulaṭī sabai samujhi nainana mēṁ, añjana rēkha banāvai।
jai śrīhita harivaṁśa prīti rīti basa, sajanī śyāma kahāvai ॥`,
    bn: `বন কী লীলা লালহিঁ ভাবৈ ।
পত্ন-প্রসূন বীচ প্রতিবিম্বহিঁ, নখ-সিখ প্রিয়া জনাভৈ॥
সকুচ ন সকত প্রগট পরিরম্ভন, অলি লম্পট দূরি ধাবৈ
সম্ভ্রম দেত কুলক কল কামিনি, রতি-রণ- কলহ মচাবৈ ॥
উলটী সবৈ সমুখি নৈনন মেঁ, অংজন রেখ বনাবৈ।
জৈ শ্রীহিত হরিবংশ প্রীতি রীতি বস, সজনী শ্যাম কহাবৈ ॥`
  },
  {
    id: 48,
    title: { hi: "पद ४८", en: "Pad 48", bn: "পদ ৪৮" },
    hi: `बनी वृषभानु नन्दिनी आजु ।
भूषन-वसन विविध पहिरे तन, पिय मोहन हित साजु ॥
हाव-भाव लावन्य भृकुटि लट, हरत जुवति-जन पाजु ।
ताल भेद औघर सुर सूचत, नूपुर किंकिणि बाजु ॥
नव निकुञ्ज अभिराम श्याम सँग, नीकौ बन्यौ समाजु ।
जै श्रीहित हरिवंश विलास-रास जुत, जोरी अविचल राजु ॥`,
    en: `banī vṛṣabhānu nandinī āju ।
bhūṣana-vasana vividha pahirē tana, piya mōhana hita sāju ॥
hāva-bhāva lāvanya bhṛkuṭi laṭa, harata juvati-jana pāju ।
tāla bhēda aughara sura sūcata, nūpura kiṁkiṇi bāju ॥
nava nikuñja abhirāma śyāma saṁga, nīkau banyau samāju ।
jai śrīhita harivaṁśa vilāsa-rāsa juta, jōrī avicala rāju ॥`,
    bn: `বনী বৃষভানু নন্দিনী আজু ।
ভূষন-বসন বিবিধ পহিরে তন, পিয় মোহন হিত সাজু ॥
হাব-ভাব লাবন্য ভ্রুকুটি লট, হরত জুবতি-জন পাজু ।
তাল ভেদ ঔঘর সুর সূচত, নূপুর কিংকিনি বাজু ॥
নব নিকুঞ্জ অভিরাম শ্যাম সঁগ, নীকৌ বন্যৌ সমাজু ।
জৈ শ্রীহিত হরিবংশ বিলাস-রাস জুত, জোরী অবিচল রাজু ॥`
  },
  {
    id: 49,
    title: { hi: "पद ४९", en: "Pad 49", bn: "পদ ৪৯" },
    hi: `देख सखी राधा पिय केलि ।
ये दोऊ खोरि खिरक गिरि गहवर, बिहरत कुँवर कण्ठ भुज मेलि ॥
ये दोऊ नवलकिशोर रूप निधि, विटप तमाल कनक मनौं बेलि ।
अधर अदन चुम्बन-परिरम्भन, तन पुलकित आनँद रस झेलि ॥
पट-बंधन कंचुकि कुच परसत, कोप कपट निरखत कर पेलि ।
जै श्रीहित हरिवंश लाल रस लम्पट, धाइ धरत उर बीच सकेलि ॥`,
    en: `dēkha sakhī rādhā piya kēli ।
yē dōū khōri khiraka giri gahavara, biharata kum̐vara kaṇṭha bhuja mēli ॥
yē dōū navalakiśōra rūpa nidhi, viṭapa tamāla kanaka manauṁ bēli ।
adhara adana cumbana-parirambhana, tana pulakita ānam̐da rasa jhēli ॥
paṭa-bandhana kañcuki kuca parasata, kōpa kapaṭa nirakhata kara pēli ।
jai śrīhita harivaṁśa lāla rasa lampaṭa, dhāi dharata ura bīca sakēli ॥`,
    bn: `দেখ সখী রাধা পিয় কেলি ।
যে দোঊ খোরি খিরক গিরি গহবর, বিহরত কুঁবর কণ্ঠ ভুজ মেলি ॥
যে দোঊ নবলকিশোর রূপ নিধি, বিটপ তমাল কনক মনৌঁ বেলি ।
অধর অদন চুম্বন-পরিরম্ভন, তন পুলকিত আনঁদ রস ঝেলি ॥
পট-বন্ধন কঞ্চুকি কুচ পরসত, কোপ কপট নিরখত কর পেলি ।
জৈ শ্রীহিত হরিবংশ লাল রস লম্পট, ধাই ধরত উর বীচ সকেলি ॥`
  },
  {
    id: 50,
    title: { hi: "पद ५०", en: "Pad 50", bn: "পদ ৫০" },
    hi: `नवलनागरि नवलनागर किशोर मिलि,
कुञ्ज कोमल कमल दलन सिज्या रची।
गौर-साँवल अंग रुचिर तापर मिले,
सरस मनि नील मनों मृदुल कंचन खची ॥
सुरत नीवी निबन्ध हेतु प्रिय मानिनी,
प्रिया की भुजनि में कलह मोहन मची।
सुभग श्रीफल उरज पानि परसत रोष,
हुँकार गर्व हग-भंगि भामिनी लची ॥
कोक कोटिक रभस रहसि हरिवंश हित,
विविध कल माधुरी किमपि नाहिन बची।
प्रणयमय रसिक ललितादि लोचन चषक,
पिवत मकरंद सुख-रासि अंतर सची ॥`,
    en: `navalanāgari navalanāgara kiśōra mili,
kuñja kōmala kamala dalana sijyā racī।
gaura-sām̐vala aṅga rucira tāpara milē,
sarasa mani nīla manōṁ mṛdula kañcana khacī ॥
surata nīvī nibandha hētu priya māninī,
priyā kī bhujani mēṁ kalaha mōhana macī।
subhaga śrīphala uraja pāni parasata rōṣa,
hum̐kāra garva dṛga-bhaṅgi bhāminī lacī ॥
kōka kōṭika rabhasa rahasi harivaṁśa hita,
vividha kala mādhurī kimapi nāhina bacī।
praṇayamaya rasika lalitādi lōcana caṣaka,
pivata makaraṁda sukha-rāsi aṁtara sacī ॥`,
    bn: `নবলনাগরি নবলনাগর কিশোর মিলি,
কুঞ্জ কোমল কমল দলন সিজ্যা রচী।
গৌর-সাঁবল অঙ্গ রুচির তাপর মিলে,
সরস মনি নীল মনৌং মৃদুল কঞ্চন খচী ॥
সুরত নীবী নিবন্ধ হেতু প্রিয় মানিনী,
প্রিয়া কী ভুজনি মেঁ কলহ মোহন মচী।
সুভগ শ্রীফল উরজ পানি পরসত রোষ,
হুঁকার গর্ব দৃগ-ভঙ্গি ভামিনী লচী ॥
কোক কোটিক রভস রহসি হরিবংশ হিত,
বিবিধ কল মাধুরী কিমপি নাহিন বচী।
প্রণয়ময় রসিক ললিতাদি লোচন চষক,
পিবত মকরংদ সুখ-রাসি অংতর সচী ॥`
  },
  {
    id: 51,
    title: { hi: "पद ५१", en: "Pad 51", bn: "পদ ৫১" },
    hi: `दान दै री नवल किशोरी ।
माँगत लाल लाड़िलौ नागर, प्रगट भई दिन-दिन की चोरी
नव नारंग कनक हीरावलि, विद्रुम सरस जलज मनि गोरी
पूरित रस पीयूष जुगल घट, कमल कदलि खंजन की जोरी
तोपै सकल सौंज दामन की, कत सतरात कुटिल दृग भोरी
नूपुर रव किकिंनी पिसुन घर, जै श्रीहित हरिवंश कहत नहिं थोरी`,
    en: `dāna dai rī navala kiśōrī ।
mām̐gata lāla lāṛilau nāgara, pragaṭa bhaī dina-dina kī cōrī
nava nāraṅga kanaka hīrāvali, vidruma sarasa jalaja mani gōrī
pūrita rasa pīyūṣa jugala ghaṭa, kamala kadali khañjana kī jōrī
tōpai sakala sauñja dāmana kī, kata satarāta kuṭila dṛga bhōrī
nūpura rava kikiṁnī pisuna ghara, jai śrīhita harivaṁśa kahata nahiṁ thōrī`,
    bn: `দান দৈ রী নবল কিশোরী ।
মাঁগত লাল লাড়িলৌ নাগর, প্রগট ভঈ দিন-দিন কী চোরী
নব নারংগ কনক হীরাবলি, বিদ্রুম সরস জলজ মনি গোরী
পূরিত রস পীয়ূষ জুগল ঘট, কমল কদলি খংজন কী জোরী
তোপৈ সকল সৌংজ দামন কী, কত সত্রাত কুটিল দৃগ ভোরী
নূপুর রব কিকিংনী পিসুন ঘর, জৈ শ্রীহিত হরিবংশ কহত নহিঁ থোরী`
  },
  {
    id: 52,
    title: { hi: "पद ५२", en: "Pad 52", bn: "পদ ৫২" },
    hi: `देखो माई, सुन्दरता की सींवाँ ।
ब्रज नव तरुनि कदंब नागरी, निरखि करत अधग्रीवाँ ॥
जो कोऊ कोटि कलप लगि जीवै, रसना कोटिक पावै ।
तऊ रुचिर वदनारविंद की, शोभा कहत न आवै ॥
देव-लोक भू-लोक रसातल, सुनि कवि-कुल मति डरिये ।
सहज माधुरी अंग-अंग की, कहि कासौं पटतरिये ॥
जैश्रीहित हरिवंश प्रताप रूप गुण, वय बल श्याम उजागर ।
जाकी भ्रू-विलास बस पशुरिव, दिन विथकित रस सागर ॥`,
    en: `dēkhō māī, sundaratā kī sīṁvām̐ ।
braja nava taruni kadamba nāgarī, nirakhi karata adhagrīvām̐ ॥
jō kōū kōṭi kalapa lagi jīvai, rasanā kōṭika pāvai ।
taū rucira vadanāravinda kī, śōbhā kahata na āvai ॥
dēva-lōka bhū-lōka rasātala, suni kavi-kula mati ḍariyē ।
sahaja mādhurī aṅga-aṅga kī, kahi kāsauṁ paṭatariyē ॥
jaiśrīhita harivaṁśa pratāpa rūpa guṇa, vaya bala śyāma ujāgara ।
jākī bhrū-vilāsa basa paśuriva, dina vithakita rasa sāgara ॥`,
    bn: `দেখো মাঈ, সুংদরতা কী সীংবাঁ ।
ব্রজ নব তরুনি কদংব নাগরী, নিরখি করত অধগ্রীবাঁ ॥
জো কোঊ কোটি কলপ লগি জীবৈ, রসনা কোটিক পাবৈ ।
তঊ রুচির বদনারবিংদ কী, শোভা কহত ন আবৈ ॥
দেব-লোক ভূ-লোক রসাতল, সুনি কবি-কুল মতি ডরিয়ে ।
সহজ মাধুরী অংগ-অংগ কী, কহি কাসৌং পটতরিয়ে ॥
জৈশ্রীহিত হরিবংশ প্রতাপ রূপ গুণ, বয় বল শ্যাম উজাগর ।
জাকী ভ্রূ-বিলাস বস পশুরিভ, দিন বিথকিত রস সাগর ॥`
  },
  {
    id: 53,
    title: { hi: "पद ५३", en: "Pad 53", bn: "পদ ৫৩" },
    hi: `देखौ माई अबला कै बल-रासि ।
अति गज मत्त निरंकुश मोहन, निरखि बँधे लट-पासि ॥
अब ही पंगु भई मन की गति, बिनु उद्दिम अनियास ।
तब की कहा कहौं जब पिय प्रति, चाहत भृकुटि विलास ॥
कच संजमन व्याज भुज दरसत मुसिकन वदन विकास ।
हा-हरिवंश अनीत रीत हित, कत डारत तन त्रास ॥`,
    en: `dēkhau māī abalā kai bala-rāsi ।
ati gaja matta niraṅkuśa mōhana, nirakhi bam̐dhē laṭa-pāsi ॥
aba hī paṅgu bhaī mana kī gati, binu uddima aniyāsa ।
taba kī kahā kahauṁ jaba piya prati, cāhata bhṛkuṭi vilāsa ॥
kaca sañjamana vyāja bhuja darasata musikana vadana vikāsa ।
hā-harivaṁśa anīta rīta hita, kata ḍārata tana trāsa ॥`,
    bn: `দেখৌ মাঈ অবলা কৈ বল-রাসি ।
অতি গজ মত্ত নিরংকুশ মোহন, নিরখি বাঁধে লট-পাসি ॥
অব হী পংগু ভঈ মন কী গতি, বিনু উদ্দিম অনিয়াস ।
তব কী কহা কহৌং জব পিয় প্রতি, চাহত ভ্রুকুটি বিলাস ॥
কচ সংজমন ব্যাজ ভুজ দরসত মুসিকন বদন বিকাস ।
হা-হরিবংশ অনীত রীত হিত, কত ডারত তন ত্রাস ॥`
  },
  {
    id: 54,
    title: { hi: "पद ५४", en: "Pad 54", bn: "পদ ৫৪" },
    hi: `नैयौ नेह नव रंग नयौ रस, नवल श्याम वृषभानु किशोरी
नव पीताम्बर नवल चूनरी, नई-नई बूँदन भीजत गोरी ॥
नव वृन्दावन हरित मनोहर, नव चातक बोलत मोर-मोरी ।
नव मुरली जु मलार नई गति, स्रवन सुनत आये घनघोरी ॥
नव भूषन नव मुकुट बिराजत, नई-नई उरप लेत थोरी-थोरी
जै श्रीहित हरिवंश असीस देत मुख, चिरजीवौ भूतल यह जोरी ॥`,
    en: `naiyau nēha nava raṅga nayau rasa, navala śyāma vṛṣabhānu kiśōrī
nava pītāmbara navala cūnarī, naī-naī būm̐dana bhījata gōrī ॥
nava vṛndāvana harita manōhara, nava cātaka bōlata mōra-mōrī ।
nava muralī ju malāra naī gati, sravana sunata āyē ghanaghōrī ॥
nava bhūṣana nava mukuṭa birājata, naī-naī urapa lēta thōrī-thōrī
jai śrīhita harivaṁśa asīsa dēta mukha, cirajīvau bhūtala yaha jōrī ॥`,
    bn: `নৈয়ৌ নেহ নব রংগ নয়ৌ রস, নবল শ্যাম বৃষভানু কিশোরী
নব পীতাম্বর নবল চুনরী, নঈ-নঈ বূঁদন ভীজত গোরী ॥
নব বৃংদাবন হরিত মনোহর, নব চাতক বোলত মোর-মোরী ।
নব মুরলী জু মলার নঈ গতি, স্রবন সুনত আয়ে ঘনঘোরী ॥
নব ভূষন নব মুকুট বিরাজত, নঈ-নঈ উরপ লেত থোরী-থোরী
জৈ শ্রীহিত হরিবংশ অসীস দেত মুখ, চিরজীবৌ ভূতল যহ জোরী ॥`
  },
  {
    id: 55,
    title: { hi: "पद ५५", en: "Pad 55", bn: "পদ ৫৫" },
    hi: `आजु दोऊ दामिनि मिलि बहसी ।
बिच लै श्याम घटा अति नूतन, ताके रंग रसी ॥
एक चमकि चहुँ ओर सखी री, अपने सुभाय लसी।
आई एक सरस गहनी में, दुहुँ भुज बीच बसी ॥
अम्बुज नील उभय विधु राजत, तिनकी चलन खसी।
जै श्रीहित हरिवंश लोभ भेंटन मन, पूरन सरद ससी ॥`,
    en: `āju dōū dāmini mili bahasī ।
bica lai śyāma ghaṭā ati nūtana, tākē raṅga rasī ॥
ēka camaki cahuṁ ōra sakhī rī, apanē subhāya lasī।
āī ēka sarasa gahanī mēṁ, duhuṁ bhuja bīca basī ॥
ambuja nīla ubhaya vidhu rājata, tinakī calana khasī।
jai śrīhita harivaṁśa lōbha bhēṁṭana mana, pūrana sarada sasī ॥`,
    bn: `আজু দোঊ দামিনি মিলি বহসী ।
বিচ লৈ শ্যাম ঘটা অতি নূতন, তাকে রংগ রসী ॥
এক চমকি চহুঁ ওর সখী রী, অপনে সুভায় লসী।
আঈ এক সরস গহনী মেঁ, দুহুঁ ভুজ বীচ বসী ॥
অম্বুজ নীল উভয় বিধু রাজত, তিনকী চলন খসী।
জৈ শ্রীহিত হরিবংশ লোভ ভেঁটন মন, পূরন সরদ সসী ॥`
  },
  {
    id: 56,
    title: { hi: "पद ५६", en: "Pad 56", bn: "পদ ৫৬" },
    hi: `हौं बलिजाँऊ नागरी श्याम ।
ऐसे ही रंग करौ निशि-वासर, वृन्दाविपिन कुटी अभिराम ॥
हास विलास सुरत रस सींचन, पशुपति-दग्ध जिवावत काम ।
जै श्रीहित हरिवंश लोल लोचन अलि, करहु न सफल सकल सुखधाम ॥`,
    en: `hauṁ balijām̐ū nāgarī śyāma ।
aisē hī raṅga karau niśi-vāsara, vṛndāvipina kuṭī abhirāma ॥
hāsa vilāsa surata rasa sīñcana, paśupati-dagdha jivāvata kāma ।
jai śrīhita harivaṁśa lōla lōcana ali, karahu na saphala sakala sukhadhāma ॥`,
    bn: `হৌঁ বলিজাঁঊ নাগরী শ্যাম ।
ঐসে হী রংগ করৌ নিশি-বাসর, বৃন্দাবিপিন কুটী অভিরাম ॥
হাস বিলাস সুরত রস সীংচন, পশুপতি-দগ্ধ জিবাবত কাম ।
জৈ শ্রীহিত হরিবংশ লোল লোচন অলি, করহু ন সফল সকল সুখধাম ॥`
  },
  {
    id: 57,
    title: { hi: "पद ५७", en: "Pad 57", bn: "পদ ৫৭" },
    hi: `प्रथम यथामति प्रणऊँ, श्रीवृन्दावन अति रम्य ।
श्रीराधिका कृपा बिनु, सबके मनन अगम्य
वर यमुनाजल सींचन, दिनहीं सरद-बसंत
विविध भाँति सुमनस के, सौरभ अलि-कुल मंत
अरुन नूत पल्लव पर, कूजत कोकिल कीर
निर्तन करत सिखीकुल, अति आनन्द अधीर
बहत पवन रुचिदायक, शीतल-मंद सुगंधु
अरुन-नील-सित मुकुलित, जहाँ तहाँ पूषन-बन्धु
अति कमनीय विराजत, मन्दिर नवल निकुञ्ज
सेवत सगन प्रीतिजुत, दिन मीनध्वज-पुञ्ज
रसिक-रासि जहाँ खेलत, श्यामा-श्याम किशोर
उभै बाहु परिरंजित, उठे उनींदे भोर
कनक कपिस पट शोभित, सुभग साँवरे अंग
नील वसन कामिनि उर, कंचुकी करूँभी सुरंग
ताल रबाब मुरज डफ, बाजत सरस मृदंग
उकति-गति सूचत, वर बँसुरी मधुर मुख चंग
दोऊ मिलि चाँचर गावत, गौरी राग अलाप
मानस-मृग बल बेधत, भृकुटि धनुष दृग चाँप
दोऊ कर तारिनु पटकत, लटकत इत उत जात
हो-हो-होरी बोलत, अति आनंद कुलकात
रसिक लाल पर मेलत, कामिनि बंदन धूरि
पिय पिचकारिनु छिरकत, तकि-तकि कुमकुम पूरि
कबहुँ-कबहुँ चन्दन तरु, निर्मित तरल हिंडोल
चढ़ि दोऊ जन झूलत, फूलत करत कलोल
वर हिंडोल झकोरन, कामिनि अधिक डरात ।
पुलकि-पुलकि वेपथ अँग, प्रीतम उर लपटात ॥
हित चिंतक निज-चेरिनु, उर आनन्द न समात ।
निरखि निपट नैंनन सुख, तृण तोरत बलि जात ॥
अति उदार विवि सुन्दर, सुरत सूर सुकुमार।
जै श्रीहित हरिवंश करौ दिन, दोऊ अचल बिहार ॥`,
    en: `prathama yathāmati praṇaūm̐, śrīvṛndāvana ati ramya ।
śrīrādhikā kṛpā binu, sabakē manana agamya
vara yamunājala sīñcana, dinahīṁ sarada-basaṁta
vividha bhām̐ti sumanasa kē, saurabha ali-kula maṁta
aruna nūta pallava para, kūjata kōkila kīra
nirtana karata sikhīkula, ati ānanda adhīra
bahata pavana rucidāyaka, śītala-maṁda sugaṁdhu
aruna-nīla-sita mukulita, jahām̐ tahām̐ pūṣana-bandhu
ati kamanīya virājata, mandira navala nikuñja
sēvata sagana prītijuta, dina mīnadhvaja-puñja
rasika-rāsi jahām̐ khēlata, śyāmā-śyāma kiśōra
ubhai bāhu parirañjita, uṭhē unīndē bhōra
kanaka kapisa paṭa śōbhita, subhaga sām̐varē aṅga
nīla vasana kāmini ura, kañcukī karūm̐bhī suraṅga
tāla rabāba muraja ḍapha, bājata sarasa mṛdaṅga
ukati-gati sūcata, vara baṁsurī madhura mukha caṅga
dōū mili cām̐cara gāvata, gaurī rāga alāpa
mānasa-mṛga bala bēdhata, bhṛkuṭi dhanuṣa dṛga cām̐pa
dōū kara tārinu paṭakata, laṭakata ita uta jāta
hō-hō-hōrī bōlata, ati ānanda kulakāta
rasika lāla para mēlata, kāmini baṁdana dhūri
piya picakārinu chirakata, taki-taki kumakuma pūri
kabahuṁ-kabahuṁ candana taru, nirmita tarala hiṇḍōla
caṛhi dōū jana jhūlata, phūlata karata kalōla
vara hiṇḍōla jhakōrana, kāmini adhika ḍarāta ।
pulaki-pulaki vēpatha aṁga, prītama ura lapaṭāta ॥
hita ciṁtaka nija-cērinu, ura ānanda na samāta ।
nirakhi nipaṭa naiṁnana sukha, tṛṇa tōrata bali jāta ॥
ati udāra vivi sundara, surata sūra sukumāra।
jai śrīhita harivaṁśa karau dina, dōū acala bihāra ॥`,
    bn: `প্রথম যথামতি প্রণঊঁ, শ্রীবৃন্দাবন অতি রম্য ।
শ্রীরাধিকা কৃপা বিনু, সবকে মনন অগম্য
বর যমুনাজল সীংচন, দিনহীং সরদ-বসংত
বিবিধ ভাঁতি সুমনস কে, সৌরভ অলি-কুল মংত
অরুন নূত পল্লব পর, কূজত কোকিল কীর
নির্তন করত সিখীকুল, অতি আনন্দ অধীর
বহত পবন রুচিদায়ক, শিতল-মংদ সুগংধু
অরুন-নীল-সিত মুকুলিত, জহাঁ তহাঁ পূষন-বন্ধু
অতি কমনীয় বিরাজত, মংদির নবল নিকুঞ্জ
সেবত সগন প্রীতিজুত, দিন মীনধ্বজ-পুঞ্জ
রসিক-রাসি জহাঁ খেলত, শ্যামা-শ্যাম কিশোর
উভৈ বাহু পরিরংজিত, উঠে উনীংদে ভোর
কনক কপিস পট শোভিত, সুভগ সাঁবরে অংগ
নীল বসন কামিনি উর, কঞ্চুকী করূঁভী সুরংগ
তাল রবাব মুরজ ডফ, বাজত সরস মৃদংগ
উকতি-গতি সূচত, বর বাঁসুরী মধুর মুখ চংগ
দোঊ মিলি চাঁচর গাবত, গৌরী রাগ অলাপ
মানস-মৃগ বল বেধত, ভ্রুকুটি ধনুশ দৃগ চাঁপ
দোঊ কর তারিনু পটকত, লটকত ইত উত জাত
হো-হো-হোরী বোলত, অতি আনংদ কুলকাত
রসিক লাল পর মেলত, কামিনি বংদন দূরি
পিয় পিচকারিনু ছিরকত, তকি-তকি কুমকুম পূরি
কবহুঁ-কবহুঁ চংদন তরু, নির্মিত তরল হিণ্ডোল
চঢ়ি দোঊ জন ঝুলত, ফুলত করত কলোল
বর হিণ্ডোল ঝকোরন, কামিনি অধিক ডরাত ।
পুলকি-পুলকি বেপথ অঁগ, প্রীতম উর লপটাত ॥
হিত চিম্তক নিজ-চেরিনু, উর আনংদ ন সমাত ।
নিরখি নিপট নৈঁনন সুখ, তৃণ তোরত বলি জাত ॥
অতি উদার বিবি সুংদর, সুরত সূর সুকুমার।
জৈ শ্রীহিত হরিবংশ করৌ দিন, দোঊ অচল বিহার ॥`
  },
  {
    id: 58,
    title: { hi: "पद ५८", en: "Pad 58", bn: "পদ ৫৮" },
    hi: `तेरे हित लैन आई, वन तें श्याम पठाई, हरत कामिनि घन कदन काम कौ।
काहे कौं करत बाधा, सुन री चतुर राधा, भेटि कैं मेटि री माई प्रगट जगत भौ ॥
देखि री रजनी नीकी, रचना रुचिर पी की, पुलिन नलिन नभ उदित रोहिनी-धौ ॥
तू तौऽव सखी सयानी, तैं मेरी एकौ न मानी, हौं तोसौं कहत हारी जुवति जुगति सौं ॥
मोहन लाल छबीलौ, अपने रंग रंगीलौ, मोहत बिहंग पशु मधुर मुरली रौ ।
ते तौऽव गनत तन जीवन जोवन तव, जै श्रीहित हरिवंश हरि भजहि भामिनि जौ ॥`,
    en: `tērē hita laina āī, vana tēṁ śyāma paṭhāī, harata kāmini ghana kadana kāma kau।
kāhē kauṁ karata bādhā, suna rī catura rādhā, bhēṭi kaiṁ mēṭi rī māī pragaṭa jagata bhau ॥
dēkhi rī rajanī nīkī, racanā rucira pī kī, pulina nalina nabha udita rōhinī-dhau ॥
tū tau'va sakhī sayānī, taiṁ mērī ēkau na mānī, hauṁ tōsauṁ kahata hārī juvati jugati sauṁ ॥
mōhana lāla chabīlau, apanē raṅga raṅgīlau, mōhata bihaṅga paśu madhura muralī rau ।
tē tau'va ganata tana jīvana jōvana tava, jai śrīhita harivaṁśa hari bhajahi bhāmini jau ॥`,
    bn: `তেরে হিত লৈন আঈ, বন তেঁ শ্যাম পঠাঈ, হরত কামিনি ঘন কদন কাম কৌ।
কাহে কৌঁ করত বাধা, সুন রী চতুর রাধা, ভেটি কৈঁ মেটি রী মাঈ প্রগট জগত ভৌ ॥
দেখি রী রজনী নীকী, রচনা রুচির পী কী, পুলিন নলিন নভ উদিত রোহিনী-ধৌ ॥
তূ তৌঽব সখী সয়ানী, তৈঁ মেরী একৌ ন মানী, হৌঁ তোসৌঁ কহত হারী জুবতি জুগতি সৌঁ ॥
মোহন লাল ছবীলৌ, অপনে রংগ রংগীলৌ, মোহত বিহংগ পশু মধুর মুরলী রৌ ।
তে তৌঽব গনত তন জীবন জোবন তব, জৈ শ্রীহিত হরিবংশ হরি ভজহি ভামিনি জৌ ॥`
  },
  {
    id: 59,
    title: { hi: "पद ५९", en: "Pad 59", bn: "পদ ৫৯" },
    hi: `यह जु एक मन बहुत ठौर करि, कहि कौनें सचु पायौ।
जहाँ-तहाँ विपति जार-जुवती लौं, प्रगट पिंगला गायौ ॥
द्वै तुरंग पर जोर चढ़त हठ, परत कौन पै धायौ।
कहि धौं कौन अंक पर राखै, जो गनिका सुत जायौ ॥
जैश्रीहित हरिवंश प्रपंच बंच सब, काल व्याल कौ खायौ।
यह जिय जानि श्याम-श्यामा पद, कमल-संगी सिर नायौ ॥`,
    en: `yaha ju ēka mana bahuta ṭhaura kari, kahi kaunēṁ sacu pāyau।
jahām̐-tahām̐ vipati jāra-juvatī lauṁ, pragaṭa piṅgalā gāyau ॥
dvai turaṅga para jōra caṛhata haṭha, parata kauna pai dhāyau।
kahi dhauṁ kauna aṅka para rākhai, jō ganikā suta jāyau ॥
jaiśrīhita harivaṁśa prapañca bañca saba, kāla vyāla kau khāyau।
yaha jiya jāni śyāma-śyāmā pada, kamala-saṅgī sira nāyau ॥`,
    bn: `যহ জু এক মন বহুত ঠৌর করি, কহি কৌনেঁ সচু পায়ৌ।
জহাঁ-তহাঁ বিপতি জার-জুবতী লৌঁ, প্রগট পিংগলা গায়ৌ ॥
দ্বৈ তুরংগ পর জোর চঢ়ত হঠ, পরত কৌন পৈ ধায়ৌ।
কহি ধৌঁ কৌন অংক পর রাখৈ, জো গনিকা সুত জায়ৌ ॥
জৈশ্রীহিত হরিবংশ প্রপংচ বংচ সব, কাল ব্যাল কৌ খায়ৌ।
যহ জিয় জানি শ্যাম-শ্যামা পদ, কমল-সংগী সির নায়ৌ ॥`
  },
  {
    id: 60,
    title: { hi: "पद ६०", en: "Pad 60", bn: "পদ ৬০" },
    hi: `कहा कहौं इन नैंनन की बात
ये अलि प्रिया-वदन-अम्बुज रस, अटके अनत न जात ॥
जब-जब रुकत पलक सम्पुट लट, अति आतुर अकुलात ।
लंपट लव निमेष अन्तर तें, अलप कलप सत सात ॥
श्रुति पर कंज दृगंजन कुच बिच, मृगमद है न समात।
जैश्रीहितहरिवंश नाभि-सर-जलचर, जाँचत साँवल गात ॥`,
    en: `kahā kahauṁ ina naiṁnana kī bāta
yē ali priyā-vadana-ambuja rasa, aṭakē anata na jāta ॥
jaba-jaba rukata palaka sampuṭa laṭa, ati ātura akulāta ।
laṁpaṭa lava nimēṣa antara tēṁ, alapa kalapa sata sāta ॥
śruti para kañja dṛgañjana kuca bica, mṛgamada hai na samāta।
jaiśrīhitaharivaṁśa nābhi-sara-jalacara, jām̐cata sām̐vala gāta ॥`,
    bn: `কহা কহৌং ইন নৈঁনন কী বাত
যে অলি প্রিয়া-বদন-অম্বুজ রস, অটকে অনত ন জাত ॥
জব-জব রুকত পলক সম্পুট লট, অতি আতুর অকুলাত ।
লংপট লব নিমেষ অংতর তেঁ, অলপ কলপ সত সাত ॥
শ্রুতি পর কংজ দৃগংজন কুচ বিচ, মৃগমদ হৈ ন সমাত।
জৈশ্রীহিতহরিবংশ নাভি-সর-জলচর, জাঁচত সাঁবল গাত ॥`
  },
  {
    id: 61,
    title: { hi: "पद ६१", en: "Pad 61", bn: "পদ ৬১" },
    hi: `आजु सखी वन में जु बने प्रभु, नाचत हैं ब्रजमंडन ।
वैस किशोर जुवति अंसन पर, दिये विमल भुज दंडन ॥
कोमल कुटिल अलक सुठि शोभित, अवलम्बित युग गंडन ।
मानहुँ मधुप थकित रस-लम्पट, नील कमल के खंडन ॥
हास-विलास हरत सबकौ मन, काम समूह विहंडन ।
जै श्रीहित हरिवंश करत अपनौं जस, प्रगट अखिल ब्रह्मण्डन ॥`,
    en: `āju sakhī vana mēṁ ju banē prabhu, nācata haiṁ brajamaṇḍana ।
vaisa kiśōra juvati aṁsana para, diyē vimala bhuja daṇḍana ॥
kōmala kuṭila alaka suṭhi śōbhita, avalambita yuga gaṇḍana ।
mānahum̐ madhupa thakita rasa-lampaṭa, nīla kamala kē khaṇḍana ॥
hāsa-vilāsa harata sabakau mana, kāma samūha vihaṇḍana ।
jai śrīhita harivaṁśa karata apanauṁ jasa, pragaṭa akhila brahmaṇḍana ॥`,
    bn: `আজু সখী বন মেঁ জু বনে প্রভু, নাচত হৈং ব্রজমংডন ।
বৈস কিশোর জুবতি অংসন পর, দিয়ে বিমল ভুজ দংডন ॥
কোমল কুটিল অলক সুঠি শোভিত, অবলম্বিত যুগ গংডন ।
মানহুঁ মধুপ থকিত রস-লম্পট, নীল কমল কে খংডন ॥
হাস-বিলাস হরত সবকৌ মন, কাম সমূহ বিহংডন ।
জৈ শ্রীহিত হরিবংশ করত অপনৌং জস, প্রগট অখিল ব্রহ্মণ্ডন ॥`
  },
  {
    id: 62,
    title: { hi: "पद ६२", en: "Pad 62", bn: "পদ ৬২" },
    hi: `खेलत रास दुलहिनी दूलहु ॥
सुनहु न सखी सहित ललितादिक, निरखि-निरखि नैंनन किन फूलहु ॥
अति कल मधुर महा मोहन धुनि, उपजत हंस सुता के कूलहु ॥
थेई-थेई वचन मिथुन मुख निसरत, सुनि-सुनि देह दशा किन भूलहु ॥
मृदु पदन्यास उठत कुंकुम रज, अद्भुत बहत समीर दुकूलहु ।
कबहुँ श्याम श्यामा दसनांचल, कच-कुच हार छुवत भुजमूलहु ॥
अति लावन्य रूप अभिनय गुन, नाहिन कोटि काम समतूलहु ।
भृकुटि विलास हास रस बरसत, जै श्रीहित हरिवंश प्रेम रस झूलहु ॥`,
    en: `khēlata rāsa dulahinī dūlahu ॥
sunahu na sakhī sahita lalitādika, nirakhi-nirakhi naiṁnana kina phūlahu ॥
ati kala madhura mahā mōhana dhuni, upajata haṁsa sutā kē kūlahu ॥
thēī-thēī vacana mithuna mukha nisarata, suni-suni dēha daśā kina bhūlahu ॥
mṛdu padanyāsa uṭhata kuṁkuma raja, adbhuta bahata samīra dukūlahu ।
kabahuṁ śyāma śyāmā dasanāñcala, kaca-kuca hāra chuvata bhujamūlahu ॥
ati lāvanya rūpa abhinaya guna, nāhina kōṭi kāma samatūlahu ।
bhṛkuṭi vilāsa hāsa rasa barasata, jai śrīhita harivaṁśa prēma rasa jhūlahu ॥`,
    bn: `খেলত রাস দুলহিনী দূলহু ॥
সুনহু ন সখী সহিত ললিতাদিক, নিরখি-নিরখি নৈঁনন কিন ফুলহু ॥
অতি কল মধুর মহা মোহন ধুনি, উপজত হংস সুতা কে কূলহু ॥
থেই-থেই বচন মিথুন মুখ নিসরত, সুনি-সুনি দেহ দশা কিন ভুলহু ॥
মৃদু পদন্যাস উঠত কুংকুম রজ, অদ্ভুত বহত সমীর দুকূলহু ।
কবহুঁ শ্যাম শ্যামা দসনাংচল, কচ-কুচ হার ছুবত ভুজমূলহু ॥
অতি লাবন্য রূপ অভিনয় গুন, নাহিন কোটি কাম সমতূলহু ।
ভ্রুকুটি বিলাস হাস রস বরসত, জৈ শ্রীহিত হরিবংশ প্রেম রস ঝুলহু ॥`
  },
  {
    id: 63,
    title: { hi: "पद ६३", en: "Pad 63", bn: "পদ ৬৩" },
    hi: `मोहन मदन त्रिभंगी। मोहन मुनि-मन-रंगी।
मोहन मुनि सघन प्रगट परमानन्द, गुन गंभीर गुपाला ।
सीस किरीट श्रवण मणि-कुण्डल, उर मंडित वनमाला ॥
पीताम्बर तन-धातु विचित्त्रित, कल किंकिनि कटि चंगी।
नख-मनि तरनि चरन सरसीरुह, मोहन मदन त्रिभंगी ॥
मोहन बेनु बजावै । इहि रव नारि बुलावै ।
आईं ब्रज नारि सुनत वंशी-रव, ग्रह पति बंधु बिसारे
दरसन मदन गुपाल मनोहर, मनसिज ताप निवारे ।
हरषित वदन बंक अवलोकन, सरस मधुर धुनि गावै
मधुमय श्याम समान अधर धरि, मोहन बेनु बजावै ॥
रास रच्यौ वन माहीं। विमल कलपतरु छाहीं ।
विमल कलपतरु तीर सुपेसल, शरद रैन वर चन्दा।
शीतल-मंद-सुगंध पवन बहै, तहाँ खेलत नंदनन्दा ॥
अद्भुत ताल मृदंग मनोहर, किंकिनि शब्द कराहीं
यमुना पुलिन रसिक रस-सागर, रास रच्यौ वन माहीं ॥
देखत मधुकर केली। मोहे खग मृग बेली।
मोहे मृग-धेनु सहित सुर-सुन्दरि, प्रेम मगन पट छूटे
उडुगन चकित थकित शशिमंडल, कोटि मदन मन लूटे
अधर पान परिरंभन अति रस, आनंद मगन सहेली
जै श्रीहित हरिवंश रसिक सचु पावत, देखत मधुकर केली ॥`,
    en: `mōhana madana tribhaṅgī। mōhana muni-mana-raṅgī।
mōhana muni saghana pragaṭa paramānanda, guna gambhīra gupālā ।
sīsa kirīṭa śravaṇa maṇi-kuṇḍala, ura maṇḍita vanamālā ॥
pītāmbara tana-dhātu vicittrita, kala kiṁkini kaṭi caṅgī।
nakha-mani tarani carana sarasīruha, mōhana madana tribhaṅgī ॥
mōhana bēnu bajāvai । ihi rava nāri bulāvai ।
āīṁ braja nāri sunata vaṁśī-rava, graha pati bandhu bisārē
darasana madana gupāla manōhara, manasija tāpa nivārē ।
haraṣita vadana baṅka avalōkana, sarasa madhura dhuni gāvai
madhumaya śyāma samāna adhara dhari, mōhana bēnu bajāvai ॥
rāsa racyau vana māhīṁ। vimala kalapataru chāhīṁ ।
vimala kalapataru tīra supēsala, śarada raina vara candā।
śītala-manda-sugandha pavana bahai, tahām̐ khēlata nandanandā ॥
adbhuta tāla mṛdaṅga manōhara, kiṁkini śabda karāhīṁ
yamunā pulina rasika rasa-sāgara, rāsa racyau vana māhīṁ ॥
dēkhata madhukara kēlī। mōhē khaga mṛga bēlī।
mōhē mṛga-dhēnu sahita sura-sundari, prēma magana paṭa chūṭē
uḍugana cakita thakita śaśimaṇḍala, kōṭi madana mana lūṭē
adhara pāna pariraṁbhana ati rasa, ānanda magana sahēlī
jai śrīhita harivaṁśa rasika sacu pāvata, dēkhata madhukara kēlī ॥`,
    bn: `মোহন মদন ত্রিভংগী। মোহন মুনি-মন-রংগী।
মোহন মুনি সঘন প্রগট পরমানন্দ, গুন গংভীর গুপালা ।
সীস কিরীট শ্রবণ মণি-কুণ্ডল, উর মংডিত বনমালা ॥
পীতাম্বর তন-ধাতু বিচিত্ত্রিত, কল কিংকিনি কটি চংগী।
নখ-মনি তরনি চরন সরসীরুহ, মোহন মদন ত্রিভংগী ॥
মোহন বেনু বজাবৈ । ইহি রব নারি বুলাবৈ ।
আঈং ব্রজ নারি সুনত বংশী-রব, গ্রহ পতি বংধু বিসারে
দরসন মদন গুপাল মনোহর, মনসিজ তাপ নিবারে ।
হরষিত বদন বংক অবলোকন, সরস মধুর ধুনি গাবৈ
মদুময় শ্যাম সমান অধর ধরি, মোহন বেনু বজাবৈ ॥
রাস রচৌ বন মাহীং। বিমল কলপতরু ছাহীং ।
বিমল কলপতরু তীর সুপেসল, শরদ রৈন বর চংদা।
শীতল-মংদ-সুগংধ পবন বহৈ, তহাঁ খেলত নংদনংদা ॥
অদ্ভুত তাল মৃদংগ মনোহর, কিংকিনি শব্দ করাহীং
যমুনা পুলিন রসিক রস-সাগর, রাস রচৌ বন মাহীং ॥
দেখত মধুকর কেলী। মোহে খগ মৃগ বেলী।
মোহে মৃগ-ধেনু সহিত সুর-সুংদরি, প্রেম মগন পট ছূটে
উডুগন চকিত থকিত শশিমংডল, কোটি মদন মন লুটে
অধর পান পরিরংভন অতি রস, আনংদ মগন সহেলী
জৈ শ্রীহিত হরিবংশ রসিক সচু পাবত, দেখত মধুকর কেলী ॥`
  },
  {
    id: 64,
    title: { hi: "पद ६४", en: "Pad 64", bn: "পদ ৬৪" },
    hi: `बेनु माई बाजै वंशीवट ।
सदा बसंत रहत वृन्दावन, पुलिन पवित्र सुभग यमुना तट ॥
जटित क्रीट मकराकृत कुण्डल, मुख अरविन्द भँवर मानों लट ।
दसनन कुंद कली छबि लज्जित, सज्जित कनक समान पीत पट ॥
मुनि मन ध्यान धरत नहिं पावत, करत विनोद संग बालक भट ।
दास अनन्य भजन रस कारन, जै श्रीहित हरिवंश प्रगट लीला नट ॥`,
    en: `bēnu māī bājai vaṁśīvaṭa ।
sadā basaṁta rahata vṛndāvana, pulina pavitra subhaga yamunā taṭa ॥
jaṭita krīṭa makarākṛta kuṇḍala, mukha aravinda bham̐vara mānōṁ laṭa ।
dasanana kunda kalī chabi lajjita, sajjita kanaka samāna pīta paṭa ॥
muni mana dhyāna dharata nahiṁ pāvata, karata vinōda saṅga bālaka bhaṭa ।
dāsa ananya bhajana rasa kārana, jai śrīhita harivaṁśa pragaṭa līlā naṭa ॥`,
    bn: `বেনু মাঈ বাজৈ বংশীবট ।
সদা বসংত রহত বৃংদাবন, পুলিন পবিত্র সুভগ যমুনা তট ॥
জটিত ক্রীট মকরাকৃত কুণ্ডল, মুখ অরবিন্দ ভঁবর মানোং লট ।
দসনন কুংদ কলী ছবি লজ্জিত, সজ্জিত কনক সমান পীত পট ॥
মুনি মন ধ্যান ধরত নহিঁ পাবত, করত বিনোদ সংগ বালক ভট ।
দাস অনন্য ভজন রস কারন, জৈ শ্রীহিত হরিবংশ প্রগট লীলা নট ॥`
  },
  {
    id: 65,
    title: { hi: "पद ६५", en: "Pad 65", bn: "পদ ৬৫" },
    hi: `मदन-मथन घन निकुञ्ज खेलत हरि, राका रुचिर शरद रजनी ।
यमुना पुलिन तट, सुर तरु के निकट, रचित रास चलि मिलि सजनी ॥
बाजत मृदु मृदंग नाचत सबै सुधंग, तैं न श्रवन सुन्यौ बेनु बजनी ।
जै श्रीहित हरिवंश प्रभु राधिका रवन मोकौं, भावै माई जगत भगत- भजनी ॥`,
    en: `madana-mathana ghana nikuñja khēlata hari, rākā rucira śarada rajanī ।
yamunā pulina taṭa, sura taru kē nikaṭa, racita rāsa cali mili sajanī ॥
bājata mṛdu mṛdaṅga nācata sabai sudhaṅga, taiṁ na śravana sunyau bēnu bajanī ।
jai śrīhita harivaṁśa prabhu rādhikā ravana mōkauṁ, bhāvai māī jagata bhagata- bhajanī ॥`,
    bn: `মদন-মথন ঘন নিকুঞ্জ খেলত হরি, রাকা রুচির শরদ রজনী ।
যমুনা পুলিন তট, সুর তরু কে নিকট, রচিত রাস চলি মিলি সজনী ॥
বাজত মৃদু মৃদংগ নাচত সবৈ সুধংগ, তৈং ন শ্রবন সুন্যৌ বেনু বজনী ।
জৈ শ্রীহিত হরিবংশ প্রভু রাধিকা রবন মোকৌং, ভাবৈ মাঈ জগত ভগত- ভজনী ॥`
  },
  {
    id: 66,
    title: { hi: "पद ६६", en: "Pad 66", bn: "পদ ৬৬" },
    hi: `बिहरत दोऊ प्रीतम कुञ्ज ।
अनुपम गौर-श्याम तन शोभा, वन बरसत सुख पुञ्ज ॥
अद्भुत खेत महा मनमथ कौ, दुंदुभि भूषन-राव।
जूझत सुभट परस्पर अँग-अँग, उपजत कोटिक भाव ॥
भर संग्राम स्रमित अति अबला, निद्रायत कल नैंन ।
पिय के अंक निसंक तंक तन, आलस जुत कृत सैन ॥
लालन मिस आतुर पिय परसत, उरू नाभि उरजात ।
अद्भुत छटा विलोकि अवनि पर, विथकित वेपथ गात ॥
नागरि निरखि मदन-विष व्यापत, दियौ सुधाधर धीर।
सत्वर उठे महा मधु पीवत, मिलत मीन मिव नीर ॥
अबही मैं मुख मध्य बिलोके, बिंबाधर सु रसाल।
जाग्रत ज्यौं भ्रम भयौ पर्यो मन, सत मनसिज कुल जाल ॥
सकृदपि मयि अधरामृत मुपनय, सुन्दरि सहज सनेह ।
तव पद-पंकज कौ निज मंदिर, पालय सखि मम देह ॥
प्रिया कहत कहु कहाँ हुते पिय, नवनिकुञ्ज-वर-राज
सुन्दर वचन रचन कत बितरत, रति-लंपट बिनु काज ॥
इतनौं श्रवन सुनत मानिनि मुख, अन्तर रह्यौ न धीर ।
मति कातर विरहज दुख व्यापत, बहुतर स्वाँस समीर ॥
जै श्रीहित हरिवंश भुजन आकर्षे, लै राखे उर माँझ ।
मिथुन मिलत जु कछुक सुख उपज्यौ, लुटि लवमिव भई साँझ ॥`,
    en: `biharata dōū prītama kuñja ।
anupama gaura-śyāma tana śōbhā, vana barasata sukha puñja ॥
adbhuta khēta mahā manamatha kau, duṁdubhi bhūṣana-rāva।
jūjhata subhaṭa paraspara aṁga-aṁga, upajata kōṭika bhāva ॥
bhara saṅgrāma sramita ati abalā, nidrāyata kala naiṁna ।
piya kē aṅka nisaṅka taṅka tana, ālasa juta kṛta saina ॥
lālana misa ātura piya parasata, urū nābhi urajāta ।
adbhuta chaṭā vilōki avani para, vithakita vēpatha gāta ॥
nāgari nirakhi madana-viṣa vyāpata, diyau sudhādhara dhīra।
satvara uṭhē mahā madhu pīvata, milata mīna miva nīra ॥
abahī maiṁ mukha madhya bilōkē, biṁbādhara su rasāla।
jāgrata jyauṁ bhrama bhayau paryō mana, sata manasija kula jāla ॥
sakṛdapi mayi adharāmṛta mupanaya, sundari sahaja sanēha ।
tava pada-paṅkaja kau nija mandira, pālaya sakhi mama dēha ॥
priyā kahata kahu kahām̐ hutē piya, navanikuñja-vara-rāja
sundara vacana racana kata bitarata, rati-laṁpaṭa binu kāja ॥
itanauṁ śravana sunata mānini mukha, antara rahyau na dhīra ।
mati kātara virahaja dukha vyāpata, bahutara svām̐sa samīra ॥
jai śrīhita harivaṁśa bhujana ākarṣē, lai rākhē ura mām̐jha ।
mithuna milata ju kachuka sukha upajyau, luṭi lavamiva bhaī sām̐jha ॥`,
    bn: `বিহরত দোঊ প্রীতম কুঞ্জ ।
অনুপম গৌর-শ্যাম তন শোভা, বন বরসত সুখ পুঞ্জ ॥
অদ্ভুত খেত মহা মনমথ কৌ, দুংদুভি ভূষন-রাব।
জূঝত সুভট পরস্পর অঁগ-অঁগ, উপজত কোটিক ভাব ॥
ভর সংগ্রাম শ্রমিত অতি অবলা, নিদ্ৰায়ত কল নৈঁন ।
পিয় কে অংক নিসংক তংক তন, আলস জুত কৃত সৈন ॥
লালন মিস আতুর পিয় পরসত, উরূ নাভি উরজাত ।
অদ্ভুত ছটা বিলোকি অবনি পর, বিথকিত বেপথ গাত ॥
নাগরি নিরখি মদন-বিষ ব্যাপত, দিয়ৌ সুধাধর ধীর।
সত্বর উঠে মহা মধু পীবত, মিলত মীন মিব নীর ॥
অবহী মৈং মুখ মধ্য বিলোকে, বিংবাধর সু রসাল।
জাগ্রত জ্যৌং ভ্রম ভয়ৌ পর্যো মন, সত মনসিজ কুল জাল ॥
সকৃদপি ময়ি অধরামৃত মুপনয়, সুংদরি সহজ সনেহ ।
তব পদ-পংকজ কৌ নিজ মংদির, পালয় সখি মম দেহ ॥
প্রিয়া কহত কহু কহাঁ হুতে পিয়, নবনিকুঞ্জ-বর-রাজ
সুংদর বচন রচন কত বিতরত, রতি-লংপট বিনু কাজ ॥
ইতনৌং শ্রবন সুনত মানিনি মুখ, অংতর রহ্যৌ ন ধীর ।
মতি কাতার বিরহজ দুখ ব্যাপত, বহুতর স্বাঁস সমীর ॥
জৈ শ্রীহিত হরিবংশ ভুজদ আকর্ষে, লৈ রাখে উর মাঁঝ ।
মিথুন মিলত জু কছুক সুখ উপজ্যৌ, লুটি লবমিব ভঈ সাঁঝ ॥`
  },
  {
    id: 67,
    title: { hi: "पद ६७", en: "Pad 67", bn: "পদ ৬৭" },
    hi: `रुचिर राजत वधू कानन किशोरी ॥
सरस सोडस किये तिलक मृगमद दिये, मृगज लोचन उबटि अंग शिर खोरी ॥
गंड पंडीर मंडित चिकुर चंद्रिका, मेदिनी कवरि गूँथित सुरँग डोरी
श्रवन ताटंक कै चिबुक पर बिंदु दै, कसूँभी कंचुकि दुरे उरज फल कोरी ॥
बलय कंकन दोत नखन जावक जोत, उदर गुन रेख, पट नील, कटि थोरी।
सुभग जघन स्थली कुनित किंकिनि भली, कोक संगीत रस-सिंधु झक झोरी ॥
विविध लीला रचित रहसि हरिवंश हित, रसिक सिरमौर राधा रवन जोरी ।
भृकुटि निर्जित मदन मंद सस्मित वदन, किये रस विवस घन स्याम पिय गोरी ॥`,
    en: `rucira rājata vadhū kānana kiśōrī ॥
sarasa sōḍasa kiyē tilaka mṛgamada diyē, mṛgaja lōcana ubaṭi aṅga śira khōrī ॥
gaṇḍa paṇḍīra maṇḍita cikura caṇḍrikā, mēdinī kavari gūm̐thita suraṁga ḍōrī
śravana tāṭaṁka kai cibuka para biṁdu dai, kasūm̐bhī kañcuki durē uraja phala kōrī ॥
balaya kaṁkana dōta nakhana jāvaka jōta, udara guna rēkha, paṭa nīla, kaṭi thōrī।
subhaga jaghana sthalī kunita kiṁkini bhalī, kōka saṁgīta rasa-sindhu jhaka jhōrī ॥
vividha līlā racita rahasi harivaṁśa hita, rasika siramaura rādhā ravana jōrī ।
bhṛkuṭi nirjita madana maṁda sasmita vadana, kiyē rasa vivasa ghana syāma piya gōrī ॥`,
    bn: `রুচির রাজত বধূ কানন কিশোরী ॥
সরস সোডস কিয়ে তিলক মৃগমদ দিয়ে, মৃগজ লোচন উবটি অংগ শির খোরী ॥
গংড পংডীর মংডিত চিকুর চংদ্রিকা, মেদিনী কবরি গূঁথিত সুরঁগ ডোরী
শ্রবন তাটংক কৈ চিবুক পর বিংদু দৈ, কসূঁভী কংচুকি দুরে উরজ ফল কোরী ॥
বলয় কংকন দোত নখন জাবক জোত, উদর গুন রেখ, পট নীল, কটি থোরী।
সুভগ জঘন স্থলী কুনিত কিংকিনি ভলী, কোক সংগীত রস-সিন্ধু ঝক ঝোরী ॥
বিবিধ লীলা রচিত রহসি হরিবংশ হিত, রসিক সিরমৌর রাধা রবন জোরী ।
ভ্রুকুটি নির্জিত মদন মংদ সস্মিত বদন, কিয়ে রস বিবস ঘন স্যাম পিয় গোরী ॥`
  },
  {
    id: 68,
    title: { hi: "पद ६८", en: "Pad 68", bn: "পদ ৬৮" },
    hi: `रास में रसिक मोहन बने भामिनी।
सुभग पावन पुलिन सरस सौरभ नलिन, मत्त मधुकर निकर शरद की जामिनी ॥
त्रिविध रोचक पवन ताप दिनमनि दवन, तहाँ ठाढ़े रवन संग सत कामिनी ।
ताल बीना मृदंग सरस नाचत सुधंग, एक तैं एक संगीत की स्वामिनी ॥
राग रागिनि जमी विपिन बरसत अमी, अधर बिंबन रमी मुरलि अभिरामिनी ।
लाग कट्टुर उरप सप्त सुर सौं सुलप लेति सुंदर सुघर राधिका नामिनी ॥
तत्त थेई थेई करत गतिव नूतन धरत, पलटि डगमग ढरति मत्त गज गामिनी ।
धाइ नवरंग धरी उरसि राजत खरी, उभय कल हंस हरिवंश घन दामिनी ॥`,
    en: `rāsa mēṁ rasika mōhana banē bhāminī।
subhaga pāvana pulina sarasa saurabha nalina, matta madhukara nikara śarada kī jāminī ॥
trividha rōcaka pavana tāpa dinamani davana, tahām̐ ṭhāṛhē ravana saṅga sata kāminī ।
tāla bīnā mṛdaṅga sarasa nācata sudhaṅga, ēka taiṁ ēka saṁgīta kī svāminī ॥
rāga rāgini jamī vipina barasata amī, adhara biṁbana ramī murali abhirāminī ।
lāga kaṭṭura urapa sapta sura sauṁ sulapa lēti suṁdara sughara rādhikā nāminī ॥
tatta thēī thēī karata gativa nūtana dharata, palaṭi ḍagamaga ḍharati matta gaja gāminī ।
dhāi navaraṅga dharī urasi rājata kharī, ubhaya kala haṁsa harivaṁśa ghana dāminī ॥`,
    bn: `রাস মেঁ রসিক মোহন বনে ভামিনী।
সুভগ পাবন পুলিন সরস সৌরভ নলিন, মত্ত মধুকর নিকর শরদ কী জামিনী ॥
ত্রিবিধ রোচক পবন তাপ দিনমনি দবন, তহাঁ ঢাঢ়ে রবন সংগ সত কামিনী ।
তাল বীনা মৃদংগ সরস নাচত সুধংগ, এক তৈং এক সংগীত কী স্বামিনী ॥
রাগ রাগিনি জমী বিপিন বরসত অমী, অধর বিংবন রমী মুরলি অভিরামিনী ।
লাগ কট্টুর উরপ সপ্ত সুর সৌং সুলপ লেতি সুংদর সুঘর রাধিকা নামিনী ॥
তত্ত থেই থেই করত গতিব নূতন ধরত, পলটি ডগমগ ঢরতি মত্ত গজ গামিনী ।
ধাই নবরংগ ধরী উরসি রাজত খরী, উভয় কল হংস হরিবংশ ঘন দামিনী ॥`
  },
  {
    id: 69,
    title: { hi: "पद ६९", en: "Pad 69", bn: "পদ ৬৯" },
    hi: `मोहिनी मोहन रंगे प्रेम सुरंगे, मत्त मुदित कल नाचत सुधंगे ।
सकल-कला प्रवीन, कल्यान रागिनी लीन, कहत न बनै माधुरी अंग-अंगे ॥
तरनि-तनया तीर, त्रिविध सखी समीर, मानौं मुनि-व्रत धरयौ कपोती कोकिला कीर ।
नागरि-नवकिशोर, मिथुन मनसि चोर, सरस गावत दोऊ मंजुल मन्दर घोर ॥
कंकन-किंकिनि धुनि, मुखर नूपुरन सुनि, जै श्रीहित हरिवंश रस बरसै नव-तरुनि ॥`,
    en: `mōhinī mōhana raṅgē prēma suraṅgē, matta mudita kala nācata sudhaṅgē ।
sakala-kalā pravīna, kalyāna rāginī līna, kahata na banai mādhurī aṅga-aṅgē ॥
tarani-tanayā tīra, trividha sakhī samīra, mānauṁ muni-vrata dharayau kapōtī kōkilā kīra ।
nāgari-navakiśōra, mithuna manasi cōra, sarasa gāvata dōū mañjula mandara ghōra ॥
kaṁkana-kiṁkini dhuni, mukhara nūpurana suni, jai śrīhita harivaṁśa rasa barasai nava-taruni ॥`,
    bn: `মোহিনী মোহন রঙ্গে প্রেম সুরঙ্গে, মত্ত মুদিত কল নাচত সুধঙ্গে ।
সকল-কলা প্রবীন, কল্যান রাগিনী লীন, কহত ন বনৈ মাধুরী অঙ্গ-অঙ্গে ॥
তরনি-তনয়া তীর, ত্রিবিধ সখী সমীর, মানৌং মুনি-ব্রত ধরযৌ কপোতী কোকিলা কীর ।
নাগরি-নবকিশোর, মিথুন মনসি চোর, সরস গাবত দোঊ মঞ্জুল মন্দর ঘোর ॥
কংকন-কিংকিনি ধুনি, মুখর নূপুরন সুনি, জৈ শ্রীহিত হরিবংশ রস বরসৈ নব-তরুনি ॥`
  },
  {
    id: 70,
    title: { hi: "पद ७०", en: "Pad 70", bn: "পদ ৭০" },
    hi: `आजु सम्हारत नाहिन गोरी ।
फूली फिरत मत्त करिनी ज्यौं, सुरत- समुद्र झकोरी ॥
आलस बलित अरुन धूसर मषि, प्रगट करत दृग चोरी ।
पिय पर करुन अमी रस बरसत, अधर अरुनता थोरी ॥
बाँधत भृंग उरज अम्बुज पर, अलक निबन्ध किशोरी ।
संगम किरच-किरच कंचुकि बँद, सिथिल भई कटि डोरी ॥
देत असीस निरखि जुवतीजन, जिनकै प्रीति न थोरी ।
जै श्रीहित हरिवंश विपिन भूतल पर, संतत अविचल जोरी ॥`,
    en: `āju samhārata nāhina gōrī ।
phūlī phirata matta karinī jyauṁ, surata- samudra jhakōrī ॥
ālasa balita aruna dhūsara maṣi, pragaṭa karata dṛga cōrī ।
piya para karuna amī rasa barasata, adhara arunatā thōrī ॥
bām̐dhata bhṛṅga uraja ambuja para, alaka nibandha kiśōrī ।
saṅgama kiraca-kiraca kañcuki baṁda, sithila bhaī kaṭi ḍōrī ॥
dēta asīsa nirakhi juvatījana, jinakai prīti na thōrī ।
jai śrīhita harivaṁśa vipina bhūtala para, saṁtata avicala jōrī ॥`,
    bn: `আজু সম্হারত নাহিন গোরী ।
ফুলী ফিরত মত্ত করিনী জ্যৌঁ, সুরত- সমুদ্র ঝকোরী ॥
আলস বলিত অরুন ধূসর মষি, প্রগট করত দৃগ চোরী ।
পিয় পর करुन অমী রস বরসত, অধর অরুনতা থোরী ॥
বাঁধত ভৃঙ্গ উরজ অম্বুজ পর, অলক নিবন্ধ কিশোরী ।
সঙ্গম কিরচ-কিরচ কঞ্চুকি বঁদ, সিথিল ভঈ কটি ডোরী ॥
দেত অসীস নিরখি জুবতীজন, জিনকৈ প্রীতি ন থোরী ।
জৈ শ্রীহিত হরিবংশ বিপিন ভূতল পর, সন্তত অবিচল জোরী ॥`
  },
  {
    id: 71,
    title: { hi: "पद ७१", en: "Pad 71", bn: "পদ ৭১" },
    hi: `श्याम सँग राधिका रासमण्डल बनी ।
बीच नंदलाल ब्रजबाल चंपक बरन, ज्यौंऽव घन तड़ित बिच कनक-मर्कतमनी ॥
लेत गति मान तत्त थेई हस्तक भेद, स रे ग म प ध नि ये सप्त सुर नादनी ।
निर्त्त रस पहिर पट नील प्रकटित छबी बदन जनु जलद में मकर की चाँदनी ॥
राग-रागिनि तान मान संगीत मत, थकित राकेस नभ शरद की जामिनी ।
जै श्रीहित हरिवंश प्रभु हंस कटि केहरी, दूरि कृत मदन मद मत्त गजगामिनी ॥`,
    en: `śyāma sam̐ga rādhikā rāsamaṇḍala banī ।
bīca nandalāla brajabāla campaka barana, jyauṁ'va ghana taṛita bica kanaka-markatamanī ॥
lēta gati māna tatta thēī hastaka bhēda, sa rē ga ma pa dha ni yē sapta sura nādanī ।
nirtta rasa pahira paṭa nīla prakaṭita chabī badana janu jalada mēṁ makara kī cām̐danī ॥
rāga-rāgini tāna māna saṁgīta mata, thakita rākēsa nabha śarada kī jāminī ।
jai śrīhita harivaṁśa prabhu haṁsa kaṭi kēharī, dūri kṛta madana mada matta gajagāminī ॥`,
    bn: `শ্যাম সঁগ রাধিকা রাসমণ্ডল বনী ।
বীচ নংদলাল ব্রজবাল চম্পক বরন, জ্যৌঁঽব ঘন তড়িত বিচ কনক-মর্কতমনী ॥
লেত গতি মান তত্ত থেই হস্তক ভেদ, স রে গ ম প ধ নি যে সপ্ত সুর নাদনী ।
নিৰ্ত্ত রস পহির পট নীল প্রকটিত ছবী বদন জনু জলদ মেঁ মকর কী চাঁদনী ॥
রাগ-রাগিনি তান মান সংগীত মত, থকিত রাকেস নভ শরদ কী জামিনী ।
জৈ শ্রীহিত হরিবংশ প্রভু হংস কটি কেহরী, দূরি কৃত মদন মদ মত্ত গজগামিনী ॥`
  },
  {
    id: 72,
    title: { hi: "पद ७२", en: "Pad 72", bn: "পদ ৭२" },
    hi: `सुन्दर पुलिन सुभग सुखदायक ।
नव-नव घन अनुराग परस्पर, खेलत कुँवर नागरी नायक ॥
शीतल हंससुता रस बीचिन, परसि पवन सीकर मृदु बरसत ।
वर मन्दार कमल चंपक कुल, सौरभ सरस मिथुन मन हरसत ॥
सकल सुधंग विलास परावधि, नाचत नवल मिले सुर गावत ।
मृगज मयूर मराल भ्रमर पिक, अद्भुत कोटि मदन सिर नावत ॥
निर्मित कुसुम सयन मधु पूरित, भाजन कनक निकुञ्ज विराजत ।
रजनी-मुख सुख-रासि परस्पर, सुरत समर दोऊ दल साजत ॥
विट-कुल-नृपति किशोरी कर धृत, बुधि बल नीवी-बंधन मोचत ।
नेति-नेति वचनामृत बोलत, प्रणय कोप प्रीतम नहिं सोचत ॥
जै श्रीहित हरिवंश रसिक ललितादिक, लता-भवन रंध्रन अवलोकत ।
अनुपम सुख भर भरित विवस असु, आनन्द-वारि कण्ठ दृग रोकत ॥`,
    en: `sundara pulina subhaga sukhadāyaka ।
nava-nava ghana anurāga paraspara, khēlata kum̐vara nāgarī nāyaka ॥
śītala haṁsasutā rasa bīcina, parasi pavana sīkara mṛdu barasata ।
vara mandāra kamala campaka kula, saurabha sarasa mithuna mana harasata ॥
sakala sudhaṅga vilāsa parāvadhi, nācata navala milē sura gāvata ।
mṛgaja mayūra marāla bhramara pika, adbhuta kōṭi madana sira nāvata ॥
nirmita kusuma sayana madhu pūrita, bhājana kanaka nikuñja virājata ।
rajanī-mukha sukha-rāsi paraspara, surata samara dōū dala sājata ॥
viṭa-kula-nṛpati kiśōrī kara dhṛta, budhi bala nīvī-baṁdhana mōcata ।
nēti-nēti vacanāmṛta bōlata, praṇaya kōpa prītama nahiṁ sōcata ॥
jai śrīhita harivaṁśa rasika lalitādika, latā-bhavana raṁdhrana avalōkata ।
anupama sukha bhara bharita vivasa asu, ānanda-vāri kaṇṭha dṛga rōkata ॥`,
    bn: `সুন্দর পুলিন সুভগ সুখদায়ক ।
নব-নব ঘন অনুরাগ পরস্পর, খেলত কুঁবর নাগরী নায়ক ॥
শীতল হংসসুতা রস বীচিন, পরসি পবন সীকর মৃদু বরসত ।
বর মন্দার কমল চম্পক কুল, সৌরভ সরস মিথুন মন হরসত ॥
সকল সুধংগ বিলাস পরাবধি, নাচত নবল মিলে সুর গাবত ।
মৃগজ ময়ূর মরাল ভ্রমর পিক, অদ্ভুত কোটি মদন সিরনাবত ॥
নির্মিত কুসুম সয়ন মধু পূরিত, ভাজন কনক নিকুঞ্জ বিরাজত ।
রজনী-মুখ সুখ-রাসি পরস্পর, সুরত সমর দোঊ দল সাজত ॥
বিট-কুল-নৃপতি কিশোরী কর ধৃত, বুধি বল নীবী-বংধন মোচত ।
নেতি-নেতি বচনামৃত বোলত, প্রণয় কোপ প্রীতম নহিঁ সোচত ॥
জৈ শ্রীহিত হরিবংশ রসিক ললিতাদিক, লতা-ভবন রংধ্রন অবলোকত ।
অনুপম সুখ ভর ভরিত বিবস অসু, আনন্দ-বারি কণ্ঠ দৃগ রোকত ॥`
  },
  {
    id: 73,
    title: { hi: "पद ७३", en: "Pad 73", bn: "পদ ৭৩" },
    hi: `खंजन मीन मृगज मद मेटत, कहा कहौं नैंनन की बातें ।
सुनि सुन्दरी कहाँ लौं सिखई, मोहन वसीकरन की घातें ॥
बंक निसंक चपल अनियारे, अरुन श्याम सित रचे कहाँ तैं ।
डरत न हरत परायौ सर्बसु, मृदु मधु मिव मादिक दृग पातैं ॥
नैंकु प्रसन्न दृष्टि पूरन करि, नहिं मोतन चितयौ प्रमदा तैं ।
जै श्रीहित हरिवंश हंस कल-गामिनि, भावै सो करहु प्रेम के नातैं ॥`,
    en: `khañjana mīna mṛgaja mada mēṭata, kahā kahauṁ naiṁnana kī bātēṁ ।
suni sundarī kahām̐ lauṁ sikhaī, mōhana vasīkarana kī ghātēṁ ॥
baṅka nisaṅka capala aniyārē, aruna śyāma sita racē kahām̐ taiṁ ।
ḍarata na harata parāyau sarbasu, mṛdu madhu miva mādika dṛga pātaiṁ ॥
naiṁku prasanna dṛṣṭi pūrana kari, nahiṁ mōtana citayau pramadā taiṁ ।
jai śrīhita harivaṁśa haṁsa kala-gāmini, bhāvai sō karahu prēma kē nātaiṁ ॥`,
    bn: `খংজন মীন মৃগজ মদ মেটত, কহা কহৌং নৈঁনন কী বাতেং ।
সুনি সুংদরী কহাঁ লৌং সিখঈ, মোহন বসীকরন কী ঘাতেং ॥
বংক নিসংক চপল অনিয়ারে, অরুন শ্যাম সিত রচে কহাঁ তৈং ।
ডরত ন হরত পরায়ৌ সর্বসু, মৃদু মধু মিব মাদিক দৃগ পাতৈং ॥
নৈংকু প্রসন্ন দৃষ্টি পূরন করি, নহিঁ মোতন চিতয়ৌ প্রমদা তৈং ।
জৈ শ্রীহিত হরিবংশ হংস কল-গামিনি, ভাবৈ সো করহু প্রেম কে নাতৈং ॥`
  },
  {
    id: 74,
    title: { hi: "पद ७४", en: "Pad 74", bn: "পদ ৭৪" },
    hi: `काहे कौं मान बढ़ावत है, बालक मृग लोचनि ।
हौं व डरनि कछु कहि न सकत, इक बात सकोचनि ।
मत्त मुरलि अंतर तव गावत, जागृत सैन तवाकृति सोचनि ।
(जै श्री) हित हरिवंश महा मोहन पिय, आतुर विट विरहज दुख मोचनि ॥`,
    en: `kāhē kauṁ māna baṛhāvata hai, bālaka mṛga lōcani ।
hauṁ va ḍarani kachu kahi na sakata, ika bāta sakōcani ।
matta murali aṁtara tava gāvata, jāgṛta saina tavākṛti sōcani ।
(jai śrī) hita harivaṁśa mahā mōhana piya, ātura viṭa virahaja dukha mōcani ॥`,
    bn: `কাহে কৌং মান বঢ়াবত হৈ, বালক মৃগ লোচনি ।
হৌং ব ডরনি কছু কহি ন সকত, ইক বাত সকোচনি ।
মত্ত মুরলি অংতর তব গাবত, জাগৃত সৈন তবাকৃতি সোচনি ।
(জৈ শ্রী) হিত হরিবংশ মহা মোহন পিয়, আতুর বিট বিরহজ দুখ মোচনি ॥`
  },
  {
    id: 75,
    title: { hi: "पद ७५", en: "Pad 75", bn: "পদ ৭৫" },
    hi: `हौं जु कहत इक बात, सखी ! सुनि काहे कौं डारत ।
प्रान रवन सौं क्यौंऽव करत, आगस बिनु आरत ॥
पिय चितवत तव चन्द्रवदन तन, तू अध मुख निज चरन निहारत ।
वे मृदु चिबुक प्रलोय प्रबोधत, तू भामिनि कर सौं कर टारत ॥
विवस अधीर विरह अति कातर, सर-औसर कछुवै न बिचारत ।
जै श्रीहित हरिवंश रहसि प्रीतम मिलि, तृषित नैंन काहे न प्रतिपारत ॥`,
    en: `hauṁ ju kahata ika bāta, sakhī ! suni kāhē kauṁ ḍārata ।
prāna ravana sauṁ kyauṁ'va karata, āgasa binu ārata ॥
piya citavata tava candravadana tana, tū adha mukha nija carana nihārata ।
vē mṛdu cibuka pralōya prabōdhata, tū bhāmini kara sauṁ kara ṭārata ॥
vivasa adhīra viraha ati kātara, sara-ausara kachuvai na bicārata ।
jai śrīhita harivaṁśa rahasi prītama mili, tṛṣita naiṁna kāhē na pratipārata ॥`,
    bn: `হৌং জু কহত ইক বাত, সখী ! সুনি কাহে কৌং ডারত ।
প্রান রবন সৌং ক্যৌঁঽব করত, আগস বিনু আরত ॥
পিয় চিতবত তব চন্দ্রবদন তন, তূ অধ মুখ নিজ চরন নিহারত ।
বে মৃদু চিবুক প্রলোয় প্রবোধত, তূ ভামিনি কর সৌং কর টারত ॥
বিবস অধীর বিরহ অতি কাতার, সর-ঔসর কছুবৈ ন বিচারত ।
জৈ শ্রীহিত হরিবংশ রহসি প্রীতম মিলি, তৃষিত নৈঁন কাহে ন প্রতিপারত ॥`
  },
  {
    id: 76,
    title: { hi: "पद ७६", en: "Pad 76", bn: "পদ ৭৬" },
    hi: `नागरी निकुञ्ज ऐन किसलय दल रचित सैन
कोक-कला-कुशल कुँवरि अति उदार री ।
सुरत रंग अंग-अंग हाव भाव भृकुटि भंग,
माधुरी तरंग मथत कोटि मार री ॥
मुखर नूपुरन सुभाव किंकिनी विचित्र राव,
विरमि-विरमि नाथ बदत वर बिहार री ।
लाड़िली किशोर राज हंस-हंसिनी समाज,
सींचत हरिवंश नयन सुरस सार री ॥`,
    en: `nāgarī nikuñja aina kisalaya dala racita saina
kōka-kalā-kuśala kum̐vari ati udāra rī ।
surata raṅga aṅga-aṅga hāva bhāva bhṛkuṭi bhaṅga,
mādhurī taraṅga mathata kōṭi māra rī ॥
mukhara nūpurana subhāva kiṁkinī vicitra rāva,
virami-virami nātha badata vara bihāra rī ।
lāṛilī kiśōra rāja haṁsa-haṁsinī samāja,
sīñcata harivaṁśa nayana surasa sāra rī ॥`,
    bn: `নাগরী নিকুঞ্জ ঐন কিসলয় দল রচিত সৈন
কোক-কলা-কুশল কুঁবরি অতি উদার রী ।
সুরত রংগ অংগ-অংগ হাব ভাব ভ্রুকুটি ভংগ,
মাধুরী তরংগ মথত কোটি মার রী ॥
মুখর নূপুরন সুভাব কিংকিনী বিচিত্র রাব,
বিরমি-বিরমি নাথ বদত বর বিহার রী ।
লাড়িলী কিশোর রাজ হংস-হংসিনী সমাজ,
সীংচত হরিবংশ নয়ন সুরস সার রী ॥`
  },
  {
    id: 77,
    title: { hi: "पद ७७", en: "Pad 77", bn: "পদ ৭৭" },
    hi: `लटकत फिरत जुवति रस फूली ।
लताभवन में सरस सकल निशि, पिय सँग सुरत-हिंडोरे झूली
जद्यपि अति अनुराग रसासव, पान-विवस नाहिंन गति भूली
आलस-वलित नैन विगलित लट, उर पर कछुक कंचुकी खूली
मरगजी माल सिथिल कटि बंधन,चित्रित कज्जल पीक दुकूली
जैश्री हित हरिवंश मदन-सर जर जर ,विथकित श्याम सजीवन मूली`,
    en: `laṭakata phirata juvati rasa phūlī ।
latābhavana mēṁ sarasa sakala niśi, piya sam̐ga surata-hiṇḍōrē jhūlī
jadyapi ati anurāga rasāsava, pāna-vivasa nāhiṁna gati bhūlī
ālasa-valita naina vigalita laṭa, ura para kachuka kañcukī khūlī
maragajī māla sithila kaṭi baṁdhana,citrita kajjala pīka dukūlī
jaiśrī hita harivaṁśa madana-sara jara jara ,vithakita śyāma sajīvana mūlī`,
    bn: `লটকত ফিরত জুবতি রস ফুলী ।
লতাভবন মেঁ সরস সকল নিশি, পিয় সঁগ সুরত-হিণ্ডোরে ঝুলী
জদ্যপি অতি অনুরাগ রশাসব, পান-বিবস নাহিঁন গতি ভুলী
আলস-বলিত নৈন বিগলিত লট, উর পর কছুক কঞ্চুকী খুলী
মরগজী মাল সিথিল কটি বংধন,চিত্রিত কজ্জল পীক দুকূলী
জৈশ্রী হিত হরিবংশ মদন-সর জর জর ,বিথকিত শ্যাম সজীবন মূলী`
  },
  {
    id: 78,
    title: { hi: "पद ७८", en: "Pad 78", bn: "পদ ৭৮" },
    hi: `सुधंग नाँचत नवल किशोरी ।
थेई-थेई कहत चहत प्रीतम दिसि, वदनचन्द्र मनौं तृषित चकोरी ॥
तान बन्धान मान में नागरि, देखत श्याम कहत हो-हो री ।
जै श्रीहित हरिवंश माधुरी अँग-अँग, बरबस लियौ मोहन चित चोरी ॥`,
    en: `sudhaṅga nām̐cata navala kiśōrī ।
thēī-thēī kahata cahata prītama disi, vadanacandra manauṁ tṛṣita cakōrī ॥
tāna bandhāna māna mēṁ nāgari, dēkhata śyāma kahata hō-hō rī ।
jai śrīhita harivaṁśa mādhurī aṁga-aṁga, barabasa liyau mōhana cita cōrī ॥`,
    bn: `সুধংগ নাঁচত নবল কিশোরী ।
থেই-থেই কহত চহত প্রীতম দিসি, বদনচন্দ্র মনৌং তৃষিত চকোরী ॥
তান বন্ধান মান মেঁ নাগরি, দেখত শ্যাম কহত হো-হো রী ।
জৈ শ্রীহিত হরিবংশ মাধুরী অঁগ-অঁগ, বরবস লিয়ৌ মোহন চিত চোরী ॥`
  },
  {
    id: 79,
    title: { hi: "पद ७९", en: "Pad 79", bn: "পদ ৭৯" },
    hi: `रहसि-रहसि मोहन पिय के सँग री, लड़ैती अति रस लटकत ।
सरस सुधंग अंग में नागरि, थेई-थेई कहत अवनि पद पटकत ॥
कोक कला कुल जानि शिरोमनि, अभिनय कुटिल भृकुटियन मटकत ।
विवश भये प्रीतम अलि लंपट, निरखि करज नासापुट चटकत ॥
गुन गन रसिक राइ चूड़ामनि, रिझवत पदिक हार पट झटकत ।
जै श्रीहित हरिवंश निकट दासी जन, लोचन-चषक रसासव गटकत ॥`,
    en: `rahasi-rahasi mōhana piya kē sam̐ga rī, laṛaitī ati rasa laṭakata ।
sarasa sudhaṅga aṅga mēṁ nāgari, thēī-thēī kahata avani pada paṭakata ॥
kōka kalā kula jāni śirōmani, abhinaya kuṭila bhṛkuṭiyana maṭakata ।
vivaśa bhayē prītama ali laṁpaṭa, nirakhi karaja nāsāpuṭa caṭakata ॥
guna gana rasika rāi cūṛāmani, rijhuvata padika hāra paṭa jhaṭakata ।
jai śrīhita harivaṁśa nikaṭa dāsī jana, lōcana-caṣaka rasāsava gaṭakata ॥`,
    bn: `রহসি-রহসি মোহন পিয় কে সঁগ রী, লড়ৈতী অতি রস লটকত ।
সরস সুধংগ অংগ মেঁ নাগরি, থেই-থেই কহত অবনি পদ পটকত ॥
কোক কলা কুল জানি শিরোমনি, অভিনয় কুটিল ভ্রুকুটিয়ান মটকত ।
বিবশ ভয়ে প্রীতম অলি লংপট, নিরখি করজ নাসাপুট চটকত ॥
গুন গন রসিক রাই চূড়ামনি, রিঝবত পদিক হার পট ঝটকত ।
জৈ শ্রীহিত হরিবংশ নিকট দাসী জন, লোচন-চষক রশাসব গটকত ॥`
  },
  {
    id: 80,
    title: { hi: "पद ८०", en: "Pad 80", bn: "পদ ৮০" },
    hi: `बल्लवी सु कनक-बल्लरी तमाल श्याम संग, लागि रही अंग-अंग मनोभिरामिनी ।
वदन जोत मनौं मयंक अलक तिलक छबि कलंक, छपत श्याम अंक मनौं जलद दामिनी ॥
बिगत-बास हेम खम्भ मनौं भुवंग बेनी-दंड, पिय के कण्ठ प्रेम-पुञ्ज कुञ्ज कामिनी ।
जै श्री शोभित हरिवंश नाथ साथ सुरत आलसवंत, उरज कनक कलस राधिका सुनामिनी ॥`,
    en: `ballavī su kanaka-ballarī tamāla śyāma saṅga, lāgi rahī aṅga-aṅga manōbhirāminī ।
vadana jōta manauṁ mayaṅka alaka tilaka chabi kalaṅka, chapata śyāma aṅka manauṁ jalada dāminī ॥
bigata-bāsa hēma khambha manauṁ bhuvaṅga bēnī-daṇḍa, piya kē kaṇṭha prēma-puñja kuñja kāminī ।
jai śrī śōbhita harivaṁśa nātha sātha surata ālasavaṁta, uraja kanaka kalasa rādhikā sunāminī ॥`,
    bn: `বল্লবী সু কনক-বল্লরী তমাল শ্যাম সংগ, লাগি রহী অংগ-অংগ মনোভীরামিনী ।
বদন জোত মনৌং ময়ংক অলক তিলক ছবি কলংক, ছপত শ্যাম অংক মনৌং জলদ দামিনী ॥
বিগত-বাস হেম খম্ভ মনৌং ভুবংগ বেনী-দংড, পিয় কে কণ্ঠ প্রেম-পুঞ্জ কুঞ্জ কামিনী ।
জৈ শ্রী শোভিত হরিবংশ নাথ সাথ সুরত আলসবংত, উরজ কনক কলস রাধিকা সুনামিনী ॥`
  },
  {
    id: 81,
    title: { hi: "पद ८१", en: "Pad 81", bn: "পদ ৮১" },
    hi: `वृषभानुनन्दिनी मधुर कल गावै ।
विकट औघर तान चर्चरी ताल सौं, नन्दनन्दन मनसि मोद उपजावै ॥
प्रथम मज्जन चारु चीर कज्जल तिलक, स्रवन कुण्डल वदन चन्द्रन लजावै ।
सुभग नक बेसरी रतन हाटक जरी, अधर बंधूक दसन कुंद चमकावै ।
वलय कंकन चारु उरसि राजत हारु, कटिव किंकिनि चरन नूपुर बजावै ।
हंस कल गामिनी मथत मद कामिनी, नखन मदयंतिका रंग रुचि द्यावै ॥
निर्त सागर रभस रहसि नागरि नवल, चन्द्र-चाली विविध भेदन जनावै ।
कोक विद्या विदित, भाइ अभिनय निपुन, भ्रू-विलासन मकरकेतन नचावै ॥
निविड़ कानन भवन, बाहु रंजित रवन, सरस आलाप सुख-पुञ्ज बरसावै ।
उभय संगम सिंधु, सुरत पूषन-बन्धु, द्रवत मकरन्द (श्री) हरिवंश अलि पावै ॥`,
    en: `vṛṣabhānunandinī madhura kala gāvai ।
vikaṭa aughara tāna carcarī tāla sauṁ, nandanandana manasi mōda upajāvai ॥
prathama majjana cāru cīra kajjala tilaka, sravana kuṇḍala vadana candrana lajāvai ।
subhaga naka bēsarī ratana hāṭaka jarī, adhara baṁdhūka dasana kunda camakāvai ।
valaya kaṁkana cāru urasi rājata hāru, kaṭiva kiṁkini carana nūpura bajāvai ।
haṁsa kala gāminī mathata mada kāminī, nakhana madayaṁtikā raṅga ruci dyāvai ॥
nirta sāgara rabhasa rahasi nāgari navala, candra-cālī vividha bhēdana janāvai ।
kōka vidyā vidita, bhāi abhinaya nipuna, bhrū-vilāsana makarakētana nacāvai ॥
niviṛa kānana bhavana, bāhu rañjita ravana, sarasa ālāpa sukha-puñja barasāvai ।
ubhaya saṅgama sindhu, surata pūṣana-bandhu, dravata makaranda (śrī) harivaṁśa ali pāvai ॥`,
    bn: `বৃষভানুনন্দিনী মধুর কল গাবৈ ।
বিকট ঔঘর তান চর্চরী তাল সৌং, নন্দনন্দন মনসি মোদ উপজাবৈ ॥
প্রথম মজ্জন চারু চীর কজ্জল তিলক, স্রবন কুণ্ডল বদন চন্দ্রন লজাবৈ ।
সুভগ নক বেসরী রতন হাটক জরী, অধর বংধূক দসন কুংদ চমকাবৈ ।
বলয় কংকন চারু উরসি রাজত হারু, কটিব কিংকিনি চরন নূপুর বজাবৈ ।
হংস কল গামিনী মথত মদ কামিনী, নখন মদযংতিকা রংগ রুচি দ্যাবৈ ॥
নিৰ্ত সাগর রভস রহসি নাগরি নবল, চন্দ্র-চালী বিবিধ ভেদন জনাভৈ ।
কোক বিদ্যা বিদিত, ভাই অভিনয় নিপুন, ভ্রূ-বিলাসন মকরকেতন নচাবৈ ॥
নিবিড় কানন ভবন, বাহু রংজিত রবন, সরস আলাপ সুখ-পুঞ্জ বরসাকৈ ।
উভয় সংগম সিংধু, সুরত পূষন-বংধু, দ্রবুত মকরন্দ (শ্রী) হরিবংশ অলি পাবৈ ॥`
  },
  {
    id: 82,
    title: { hi: "पद ८२", en: "Pad 82", bn: "পদ ৮২" },
    hi: `नागरता की राशि किशोरी ।
नव नागर कुल-मौलि साँवरौ, बरबस कियौ चितै मुख मोरी ॥
रूप रुचिर अँग-अंग माधुरी, बिनु भूषन भूषित ब्रज गोरी
छिन छिन कुशल सुधंग अंग में, कोक रभस रस-सिन्धु झकोरी ॥
चंचल रसिक मधुप मोहन मन, राखे कनक कमल कुच कोरी ।
प्रीतम नैंन जुगल खञ्जन खग, बाँधे विविध निबन्धन डोरी ॥
अवनी उदर नाभि सरसी में, मनौं कछुक मादिक मधु घोरी ।
जै श्रीहित हरिवंश पिवत सुन्दर वर, सींव सुहृद निगमन की तोरी ॥`,
    en: `nāgaratā kī rāśi kiśōrī ।
nava nāgara kula-mauli sām̐varau, barabasa kiyau citai mukha mōrī ॥
rūpa rucira aṁga-aṅga mādhurī, binu bhūṣana bhūṣita braja gōrī
china china kuśala sudhaṅga aṅga mēṁ, kōka rabhasa rasa-sindhu jhakōrī ॥
cañcala rasika madhupa mōhana mana, rākhē kanaka kamala kuca kōrī ।
prītama naiṁna jugala khañjana khaga, bām̐dhē vividha nibandhana ḍōrī ॥
avanī udara nābhi sarasī mēṁ, manauṁ kachuka mādika madhu ghōrī ।
jai śrīhita harivaṁśa pivata sundara vara, sīṁva suhṛda nigamana kī tōrī ॥`,
    bn: `নাগরতা কী রাশি কিশোরী ।
নব নাগর কুল-মৌলি সাঁবরৌ, বরবস কিয়ৌ চিতৈ মুখ মোরী ॥
রূপ রুচির অঁগ-অঙ্গ মাধুরী, বিনু ভূষন ভূষিত ব্রজ গোরী
ছিন ছিন কুশল সুধংগ অংগ মেঁ, কোক রভস রস-সিন্ধু ঝকোরী ॥
চংচল রসিক মধুপ মোহন মন, রাখে কনক কমল কুচ কোরী ।
প্রীতম নৈঁন জুগল খঞ্জন খগ, বাঁধে বিবিধ নিবন্ধন ডোরী ॥
অবনী উদর নাভি সরসী মেঁ, মনৌং কছুক মাদিক মধু ঘোরী ।
জৈ শ্রীহিত হরিবংশ পিবত সুংদর বর, সীংব সুহৃদ নিগমন কী তোরী ॥`
  },
  {
    id: 83,
    title: { hi: "पद ८३", en: "Pad 83", bn: "পদ ৮৩" },
    hi: `छाँड़ि दै मानिनी मान मन धरिबौ ।
प्रनत सुन्दर सुघर प्रानवल्लभ नवल, वचन आधीन सौं इतौ कत करिबौ ॥
जपत हरि विवश तव नाम प्रतिपद विमल, मनसि तव ध्यान तैं निमिष नहिं टरिबौ ।
घटत पल-पल सुभग शरद की जामिनी, भामिनी सरस अनुराग दिस ढरिबौ ॥
हौं जु कछु कहत निजु बात सुनि मान सखि, सुमुखि बिनु काज घन विरह दुख भरिबौ ।
मिलत हरिवंश हित कुञ्ज किसलय सयन, करत कल केलि सुख-सिंधु में तरिबौ ॥`,
    en: `chām̐ṛi dai māninī māna mana dharibau ।
pranata sundara sughara prānavallabha navala, vacana ādhīna sauṁ itau kata karibau ॥
japata hari vivaśa tava nāma pratipada vimala, manasi tava dhyāna taiṁ nimiṣa nahiṁ ṭaribau ।
ghaṭata pala-pala subhaga śarada kī jāminī, bhāminī sarasa anurāga disa ḍharibau ॥
hauṁ ju kachu kahata niju bāta suni māna sakhi, sumukhi binu kāja ghana viraha dukha bharibau ।
milata harivaṁśa hita kuñja kisalaya sayana, karata kala kēli sukha-siṁdhu mēṁ taribau ॥`,
    bn: `ছাঁড়ি দৈ মানিনী মান মন ধরিবৌ ।
প্রনত সুংদর সুঘর প্রানবল্লভ নবল, বচন আধীন সৌং ইতৌ কত করিবৌ ॥
জপত হরি বিবশ তব নাম প্রতিপদ বিমল, মনসি তব ধ্যান তৈং নিমিষ নহিঁ টরিবৌ ।
ঘটত পল-পল সুভগ শরদ কী জামিনী, ভামিনী সরস অনুরাগ দিস ঢরিবৌ ॥
হৌং জু কছু কহত নিজু বাত সুনি মান সখি, সুমুখি বিনু কাজ ঘন বিরহ দুখ ভরিবৌ ।
মিলত হরিবংশ হিত কুঞ্জ কিসলয় সয়ন, করত কল কেলি সুখ-সিংধু মেঁ তরিবৌ ॥`
  },
  {
    id: 84,
    title: { hi: "पद ८४", en: "Pad 84", bn: "পদ ৮৪" },
    hi: `आजुऽव देखियत है हो प्यारी रंग भरी ।
मोपै न दुरत चोरी, वृषभानु की किशोरी, शिथिल कटि की डोरी, नंद के लालन सौं सुरत लरी ॥
मोतियन लर टूटी, चिकुर चन्द्रिका छूटी, रहसि रसिक लूटी, गंडन पीक परी ।
नैंनन आलस बस, अधर बिंब निरस, पुलक प्रेम परस, हित हरिवंश री राजत खरी ॥`,
    en: `āju'va dēkhiyata hai hō pyārī raṅga bharī ।
mōpai na durata cōrī, vṛṣabhānu kī kiśōrī, śithila kaṭi kī ḍōrī, nanda kē lālana sauṁ surata larī ॥
mōtiyana lara ṭūṭī, cikura candrikā chūṭī, rahasi rasika lūṭī, gaṇḍana pīka parī ।
naiṁnana ālasa basa, adhara biṁba nirasa, pulaka prēma parasa, hita harivaṁśa rī rājata kharī ॥`,
    bn: `আজুঽব দেখিয়ত হৈ হো প্যারী রংগ ভরী ।
মোপৈ ন দুরত চোরী, বৃষভানু কী কিশোরী, শিথিল কটি কী ডোরী, নংদ কে লালন সৌং সুরত লরী ॥
মোতিয়ন লর টুটী, চিকুর চংদ্রিকা ছুটী, রহসি রসিক লুটী, গংডন পীক পরী ।
নৈঁনন আলস বস, অধর বিংব নিরস, পুলক প্রেম পরস, হিত হরিবংশ রী রাজত খরী ॥`
  },
  {
    id: 85,
    title: { hi: "फलस्तुति", en: "Falastuti", bn: "ফলস্তুতি" },
    hi: `भव-जल-निधि कौ नाव, काम-पावक कौ पानी ।
प्रेम-भक्ति कौ मूल, मोद मंगल सुखदानी ॥
निगम सार सिद्धान्त, सन्त विश्राम मधुर वर ।
रसिकन कौ रस - सार, सकल अक्षर रस कौ घर ॥
चौरासी हरिवंश कृत, पढ़ें सुनै निशि-भोर ।
छुटि चौरासी भ्रमन तैं, निरखै जुगल किशोर ॥1 ॥
निरखै जुगल किशोर भोर अरु रैन न जानै ।
पियै रूप रस मत्त भयौ कछु मनहिं न आनै ॥
प्रेम लक्षणा भक्ति होइ हिय आनन्द कारी ।
अरु वृन्दावन वास सखी सुख के अधिकारी ॥
कुंज महल की टहल सुख, दंपति संपति पाई है ।
(जैश्री) रूपलाल हित प्रीति सौं जो चौरासी गाइ है ॥ 2 ॥
छः पद विभास माँझ, सात हैं विलावल में, टोड़ी में चतुर, आसावरी में द्वै बने ।
सप्त हैं धनाश्री में, जुगल बसंत केलि, देवगंधार पंच- दोइ,रस सौं सने ॥
सारंग में षोडस हैं,चार ही मलार, एक- गौड़ में सुहायौ, नव गौरी रस में भने ।
षट् कल्यान, निधि, कान्हरे, केदारे, वेद वाणी हितजू की सब, चौदह राग में गने ॥`,
    en: `bhava-jala-nidhi kau nāva, kāma-pāvaka kau pānī ।
prēma-bhakti kau mūla, mōda maṅgala sukhadānī ॥
nigama sāra siddhānta, santa viśrāma madhura vara ।
rasikana kau rasa - sāra, sakala akṣara rasa kau ghara ॥
caurāsī harivaṁśa kṛta, paṛhēṁ sunai niśi-bhōra ।
chuṭi caurāsī bhramana taiṁ, nirakhai jugala kiśōra ॥1 ॥
nirakhai jugala kiśōra bhōra aru raina na jānai ।
piyai rūpa rasa matta bhayau kachu manahiṁ na ānai ॥
prēma lakṣaṇā bhakti hōi hiya ānanda kārī ।
aru vṛndāvana vāsa sakhī sukha kē adhikārī ॥
kuñja mahala kī ṭahala sukha, dampati sampati pāī hai ।
(jaiśrī) rūpalāla hita prīti sauṁ jō caurāsī gāi hai ॥ 2 ॥
chaḥ pada vibhāsa mām̐jha, sāta haiṁ vilāvala mēṁ, ṭōṛī mēṁ catura, āsāvarī mēṁ dvai banē ।
sapta haiṁ dhanāśrī mēṁ, jugala basanta kēli, dēvagandhāra pañca- dōi,rasa sauṁ sanē ॥
sāraṅga mēṁ ṣōḍasa haiṁ,cāra hī malāra, ēka- gauṛa mēṁ suhāyau, nava gaurī rasa mēṁ bhanē ।
ṣaṭ kalyāna, nidhi, kānharē, kēdārē, vēda vāṇī hitajū kī saba, caudaha rāga mēṁ ganē ॥`,
    bn: `ভব-জল-নিধি কৌ নাব, কাম-পাবক কৌ পানী ।
প্রেম-ভক্তি কৌ মূল, মোদ মঙ্গল সুখদানী ॥
নিগম সার সিদ্ধান্ত, সন্ত বিশ্রাম মধুর বর ।
রসিকন কৌ রস - সার, সকল অক্ষর রস কৌ ঘর ॥
চৌরাসী হরিবংশ কৃত, পঢ়েং সুনৈ নিশি-ভোর ।
ছুটি চৌরাসী ভ্রমন তৈং, নিরখৈ জুগল কিশোর ॥১ ॥
নিরখৈ জুগল কিশোর ভোর অরু রৈন ন জানৈ ।
পিয়ৈ রূপ রস মত্ত ভয়ৌ কছু মনহিঁ ন আনৈ ॥
প্রেম লক্ষণা ভক্তি হোই হিয় আনন্দ কারী ।
অরু বৃন্দাবন বাস সখী সুখ কে অধিকারী ॥
কুঞ্জ মহল কী টহল সুখ, দম্পতি সম্পতি পাঈ হৈ ।
(জৈশ্রী) রূপলাল হিত প্রীতি সৌং জো চৌরাসী গাই হৈ ॥ ২ ॥
ছঃ পদ বিভাস মাঁঝ, সাত হৈং বিলাবল মেং, টোড়ী মেং চতুর, আসাবরী মেং দ্বৈ বনে ।
সप्त হৈং ধনাশ্রী মেং, জুগল বসন্ত কেলি, দেবগন্ধার পঞ্চ- দোই,রস সৌং সনে ॥
সারঙ্গ মেং ষোডস হৈং,চার হী মলার, এক- গৌড় মেং সুহায়ৌ, নব গৌরী রস মেং ভনে ।
ষট্ কল্যান, নিধি, কান্হরে, কেদারে, বেদ বাণী হিতজূ কী সব, চৌদহ রাগ মেং গনে ॥`
  },
  {
    id: 86,
    title: { hi: "जयकार", en: "Jaikara", bn: "জয়কার" },
    hi: `॥ श्री ललिता जू की जय ॥
॥ श्री विशाखा जू की जय ॥
॥ श्री चंपकलता जू की जय ॥
॥ श्री चित्रा जू की जय ॥
॥ श्री तुंगविद्या जू की जय ॥
॥ श्री इन्दुलेखा जू की जय ॥
॥ श्री रंगदेवी जू की जय ॥
॥ श्री सुदेवी जू की जय ॥
॥ समस्त सहचरी वृंद की जय ॥
॥श्रीसदगुरुदेवभगवान् की जय ॥`,
    en: `॥ śrī lalitā jū kī jaya ॥
॥ śrī viśākhā jū kī jaya ॥
॥ śrī campakalatā jū kī jaya ॥
॥ śrī citrā jū kī jaya ॥
॥ śrī tuṅgavidyā jū kī jaya ॥
॥ śrī indulēkhā jū kī jaya ॥
॥ śrī raṅgadēvī jū kī jaya ॥
॥ śrī sudēvī jū kī jaya ॥
॥ samasta sahacarī vṛnda kī jaya ॥
॥śrīsadagurudēvabhagavān kī jaya ॥`,
    bn: `॥ শ্রী ললিতা জূ কী জয় ॥
॥ শ্রী বিশাখা জূ কী জয় ॥
॥ শ্রী চম্পকলতা জূ কী জয় ॥
॥ শ্রী চিত্রা জূ কী জয় ॥
॥ শ্রী তুঙ্গবিদ্যা জূ কী জয় ॥
॥ শ্রী ইন্দুলেখা জূ কী জয় ॥
॥ শ্রী রঙ্গদেবী জূ কী জয় ॥
॥ শ্রী সুদেবী জূ কী জয় ॥
॥ সমস্ত সহচরী বৃংদ কী জয় ॥
॥শ্রীসদগুরুদেবভগবান্ কী জয় ॥`
  }
];