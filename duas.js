const duas = [
  {
    id: 1,
    arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ‌ لَنَا وَتَرْ‌حَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِ‌ينَ",
    urdu: "اے ہمارے رب! ہم نے اپنی جانوں پر ظلم کیا، اور اگر تو نے نہ بخشا اور نہ رحم فرمایا تو ہم خسارہ پانے والوں میں سے ہوں گے۔",
    english: "Our Lord! We have wronged ourselves. If You do not forgive us and have mercy upon us, we will surely be among the losers.",
    reference: "https://quran.com/7/23",
    source: "Qur’an 7:23, Surah Al-A’raf"
  },
  {
    id: 2,
    arabic: "لَا إِلَـٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    urdu: "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ظالموں میں سے ہوں۔",
    english: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    reference: "https://quran.com/21/87",
    source: "Qur’an 21:87, Surah Al-Anbiya"
  },
  {
    id: 3,
    arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    urdu: "اے میرے رب! جو خیر تو میری طرف نازل کرے، میں اس کا محتاج ہوں۔",
    english: "My Lord, indeed I am in need of whatever good You send down to me.",
    reference: "https://quran.com/28/24",
    source: "Qur’an 28:24, Surah Al-Qasas"
  },
  {
    id: 4,
    arabic: "رَبَّنَا آتِنَا مِن لَّدُنكَ رَ‌حْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَ‌شَدًا",
    urdu: "اے ہمارے رب! ہمیں اپنے پاس سے رحمت عطا فرما اور ہمارے معاملے میں ہمارے لئے راہِ راست مہیا کر۔",
    english: "Our Lord! Grant us mercy from Yourself and provide for us guidance in our affair.",
    reference: "https://quran.com/18/10",
    source: "Qur’an 18:10, Surah Al-Kahf"
  },
  {
    id: 5,
    arabic: "اَللّٰهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    urdu: "اے اللہ! بے شک تو معاف کرنے والا ہے، معافی کو پسند کرتا ہے، مجھے بھی معاف فرما۔",
    english: "O Allah! Indeed, You are Pardoning, You love pardon, so pardon me.",
    reference: "https://sunnah.com/tirmidhi:3513",
    source: "Hadith: Tirmidhi 3513"
  },
  {
    id: 6,
    arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَ‌حْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
    urdu: "اے ہمارے رب! ہمارے دلوں کو ہدایت کے بعد کجی میں نہ ڈال اور ہمیں اپنی طرف سے رحمت عطا فرما۔",
    english: "Our Lord! Do not let our hearts deviate after You have guided us, and grant us mercy from Yourself. Indeed, You are the Bestower.",
    reference: "https://quran.com/3/8",
    source: "Qur’an 3:8, Surah Al-Imran"
  },
  {
    id: 7,
    arabic: "اَللّٰهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
    urdu: "اے اللہ! میں تجھ سے ہدایت، پرہیزگاری، پاکیزگی، بے نیازی اور دنیا و آخرت میں عافیت مانگتا ہوں۔",
    english: "O Allah! I ask You for guidance, piety, chastity, sufficiency, and well-being in this world and the Hereafter.",
    reference: "https://sunnah.com/muslim:2721",
    source: "Hadith: Muslim 2721"
  },
  {
    id: 8,
    arabic: "اَللّٰهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ وَأَرِنَا الْبَاطِلَ بَاطِلًا وَارْزُقْنَا اجْتِنَابَهُ",
    urdu: "اے اللہ! ہمیں حق کو حق دکھا اور اس کی پیروی کی توفیق دے، اور باطل کو باطل دکھا اور اس سے بچنے کی توفیق دے۔",
    english: "O Allah! Show us the truth as truth and grant us the ability to follow it, and show us falsehood as falsehood and grant us the ability to avoid it.",
    reference: "https://sunnah.com/ahmad:1397",
    source: "Musnad Ahmad 1397"
  },
  {
    id: 9,
    arabic: "اَللّٰهُمَّ أَجِرْنَا مِنَ النَّارِ",
    urdu: "اے اللہ! ہمیں آگ (جہنم) سے بچا۔",
    english: "O Allah! Protect us from the Fire.",
    reference: "https://sunnah.com/abudawud:5079",
    source: "Hadith: Abu Dawood 5079"
  },
  {
    id: 10,
    arabic: "رَبَّنَا اصْرِ‌فْ عَنَّا عَذَابَ جَهَنَّمَ إِنَّ عَذَابَهَا كَانَ غَرَ‌امًا",
    urdu: "اے ہمارے رب! ہم سے جہنم کا عذاب دور فرما، بے شک اس کا عذاب ہمیشہ چمٹے رہنے والا ہے۔",
    english: "Our Lord! Avert from us the punishment of Hell. Indeed, its punishment is ever adhering.",
    reference: "https://quran.com/25/65",
    source: "Qur’an 25:65, Surah Al-Furqan"
  },
  {
    id: 11,
    arabic: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    urdu: "اے میرے رب! میرے والدین پر رحم فرما جیسے انہوں نے بچپن میں میری پرورش کی۔",
    english: "My Lord! Have mercy upon them as they brought me up when I was small.",
    reference: "https://quran.com/17/24",
    source: "Qur’an 17:24, Surah Al-Isra"
  },
  {
    id: 12,
    arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّ‌ةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    urdu: "اے ہمارے رب! ہمیں ہماری بیویوں اور اولاد سے آنکھوں کی ٹھنڈک عطا فرما اور ہمیں پرہیزگاروں کا امام بنا۔",
    english: "Our Lord! Grant us from among our spouses and offspring comfort to our eyes and make us leaders for the righteous.",
    reference: "https://quran.com/25/74",
    source: "Qur’an 25:74, Surah Al-Furqan"
  },
  {
    id: 13,
    arabic: "رَبِّ اشْرَ‌حْ لِي صَدْرِي * وَيَسِّرْ‌ لِي أَمْرِي * وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي * يَفْقَهُوا قَوْلِي",
    urdu: "اے میرے رب! میرا سینہ کھول دے، میرا کام آسان فرما، میری زبان کی گرہ کھول دے تاکہ لوگ میری بات سمجھ سکیں۔",
    english: "My Lord! Expand for me my chest, ease my task, and untie the knot from my tongue, that they may understand my speech.",
    reference: "https://quran.com/20/25-28",
    source: "Qur’an 20:25-28, Surah Ta-Ha"
  },
  {
    id: 14,
    arabic: "اللَّهُمَّ رَبِّ يَسِّرْ‌ وَلَا تُعَسِّرْ‌ وَتَمِّمْ بِالْخَيْرِ‌",
    urdu: "اے اللہ! اے میرے رب! آسان فرما اور مشکل نہ فرما، اور بھلائی کے ساتھ مکمل کر۔",
    english: "O Allah, my Lord! Make things easy and do not make them difficult, and complete them with goodness.",
    reference: "https://sunnah.com/ibnhibban:2427",
    source: "Hadith: Ibn Hibban 2427"
  },
  {
    id: 15,
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    urdu: "اے ہمارے رب! ہمیں دنیا میں بھی بھلائی عطا فرما اور آخرت میں بھی بھلائی عطا فرما اور ہمیں آگ کے عذاب سے بچا۔",
    english: "Our Lord! Grant us good in this world and good in the Hereafter, and save us from the punishment of the Fire.",
    reference: "https://quran.com/2/201",
    source: "Qur'an, Surah Al-Baqarah (2:201)"
  },
  {
    id: 16,
    arabic: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ ﴿٤٠﴾ رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ ﴿٤١﴾",
    urdu: "اے میرے رب! مجھے نماز قائم کرنے والا بنا اور میری اولاد میں سے بھی۔ اے ہمارے رب! اور میری دعا قبول فرما۔ اے ہمارے رب! مجھے اور میرے والدین کو اور سب مؤمنوں کو بخش دے جس دن حساب قائم ہوگا۔",
    english: "My Lord! Make me an establisher of prayer, and from my descendants. Our Lord! Accept my supplication. Our Lord! Forgive me, my parents, and the believers on the Day the account is established.",
    reference: "https://quran.com/14/40-41",
    source: "Qur'an, Surah Ibrahim (14:40-41)"
  }
];
