const duas = [
  {
    id: 1,
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرَحْمَةً وَمَغْفِرَةً وَعَافِيَةً فِي الدُّنْيَا وَالْآخِرَةِ",
    urdu: "اے اللہ! میں تجھ سے علمِ نافع، رحمت، مغفرت اور دنیا و آخرت میں عافیت کا طلب گار ہوں۔",
    english: "O Allah, I ask You for beneficial knowledge, mercy, forgiveness, and well-being in this world and the Hereafter.",
    reference: "https://sunnah.com/ibnmajah/1/925",
    source: "Sunan Ibn Majah 925"
  },
  {
    id: 2,
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْجَنَّةِ",
    urdu: "اے اللہ! مجھے اہلِ جنت میں شامل فرما۔",
    english: "O Allah, make me among the people of Paradise.",
    reference: "https://sunnah.com/ibnmajah/1/925",
    source: "Sunan Ibn Majah 925"
  },
  {
    id: 3,
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ النَّارِ",
    urdu: "اے اللہ! مجھے اہلِ دوزخ میں شامل نہ فرما۔",
    english: "O Allah, do not make me among the people of the Fire.",
    reference: "https://sunnah.com/ibnmajah/1/925",
    source: "Sunan Ibn Majah 925"
  },
  {
    id: 4,
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْمُجَاهِدِينَ فِي سَبِيلِكَ",
    urdu: "اے اللہ! مجھے اپنے راستے میں جہاد کرنے والوں میں شامل فرما۔",
    english: "O Allah, make me among those who strive in Your path.",
    reference: "https://sunnah.com/ibnmajah/1/925",
    source: "Sunan Ibn Majah 925"
  },
  {
    id: 5,
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الصَّدَقَةِ",
    urdu: "اے اللہ! مجھے صدقہ دینے والوں میں شامل فرما۔",
    english: "O Allah, make me among those who give charity.",
    reference: "https://sunnah.com/ibnmajah/1/925",
    source: "Sunan Ibn Majah 925"
  },
  {
    id: 6,
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الصَّلَاةِ",
    urdu: "اے اللہ! مجھے نماز قائم کرنے والوں میں شامل فرما۔",
    english: "O Allah, make me among those who establish prayer.",
    reference: "https://sunnah.com/ibnmajah/1/925",
    source: "Sunan Ibn Majah 925"
  },
  {
    id: 7,
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْمَغْفِرَةِ",
    urdu: "اے اللہ! مجھے مغفرت کرنے والوں میں شامل فرما۔",
    english: "O Allah, make me among those who forgive.",
    reference: "https://sunnah.com/ibnmajah/1/925",
    source: "Sunan Ibn Majah 925"
  },
  {
    id: 8,
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الرَّحْمَةِ",
    urdu: "اے اللہ! مجھے رحم کرنے والوں میں شامل فرما۔",
    english: "O Allah, make me among those who show mercy.",
    reference: "https://sunnah.com/ibnmajah/1/925",
    source: "Sunan Ibn Majah 925"
  },
  {
    id: 9,
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْجَمَاعَةِ",
    urdu: "اے اللہ! مجھے جماعت کے ساتھ رہنے والوں میں شامل فرما۔",
    english: "O Allah, make me among those who are with the congregation.",
    reference: "https://sunnah.com/ibnmajah/1/925",
    source: "Sunan Ibn Majah 925"
  },
  {
    id: 10,
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْمَعْرُوفِ",
    urdu: "اے اللہ! مجھے معروف کرنے والوں میں شامل فرما۔",
    english: "O Allah, make me among those who do good.",
    reference: "https://sunnah.com/ibnmajah/1/925",
    source: "Sunan Ibn Majah 925"
  },
  {
    id: 11,
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْإِيمَانِ",
    urdu: "اے اللہ! مجھے ایمان والوں میں شامل فرما۔",
    english: "O Allah, make me among the believers.",
    reference: "https://sunnah.com/ibnmajah/1/925",
    source: "Sunan Ibn Majah 925"
  },
  {
    id: 12,
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْإِحْسَانِ",
    urdu: "اے اللہ! مجھے احسان کرنے والوں میں شامل فرما۔",
    english: "O Allah, make me among those who do excellence.",
    reference: "https://sunnah.com/ibnmajah/1/925",
    source: "Sunan Ibn Majah 925"
  },
  {
    id: 13,
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْفَجْرِ",
    urdu: "اے اللہ! مجھے فجر کے نمازیوں میں شامل فرما۔",
    english: "O Allah, make me among those who pray Fajr.",
    reference: "https://sunnah.com/ibnmajah/1/925",
    source: "Sunan Ibn Majah 925"
  },
  {
    id: 14,
    arabic: "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَىٰ رَبِّنَا تَوَكَّنْنَا",
    urdu: "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَىٰ رَبِّنَا تَوَكَّنْنَا",
    english: "In the name of Allah, we enter, and in the name of Allah, we leave, and upon our Lord, we place our trust.",
    reference: "https://sunnah.com/nasai/20/146",
    source: "Sunan an-Nasa'i 1389"
  }
];
