const mk = (p) => ({
  fa: p.fa,
  en: p.en
})

/**
 * Tours dataset (demo) — designed to power filtering/sorting/favorites.
 * In a real app this would come from an API.
 */
export const tours = [
  {
    id: 1,
    city: mk({ fa: 'استانبول', en: 'Istanbul' }),
    country: mk({ fa: 'ترکیه', en: 'Turkey' }),
    title: mk({ fa: 'تور استانبول ۴ شب + هتل ۴ ستاره', en: 'Istanbul — 4 Nights + 4-Star Hotel' }),
    nights: 4,
    days: 5,
    category: 'city',
    style: 'popular',
    price: 18900000,
    rating: 4.8,
    seatsLeft: 7,
    bestSeason: mk({ fa: 'بهار/پاییز', en: 'Spring/Fall' }),
    highlights: [
      mk({ fa: 'گشت شهری + بازار بزرگ', en: 'City tour + Grand Bazaar' }),
      mk({ fa: 'کروز بسفر', en: 'Bosphorus cruise' }),
      mk({ fa: 'ترانسفر فرودگاهی', en: 'Airport transfer' })
    ],
    includes: [
      mk({ fa: 'پرواز رفت و برگشت', en: 'Round-trip flight' }),
      mk({ fa: 'اقامت هتل ۴ ستاره', en: '4-star hotel stay' }),
      mk({ fa: 'بیمه مسافرتی', en: 'Travel insurance' })
    ],
    itinerary: [
      mk({ fa: 'ورود + تحویل اتاق + استراحت', en: 'Arrival + check-in + rest' }),
      mk({ fa: 'گشت شهری (ایاصوفیه/سلطان احمد)', en: 'City tour (Hagia Sophia / Blue Mosque)' }),
      mk({ fa: 'کروز بسفر + خرید', en: 'Bosphorus cruise + shopping' }),
      mk({ fa: 'وقت آزاد', en: 'Free time' }),
      mk({ fa: 'بازگشت', en: 'Return' })
    ],
    cover: {
      gradient: 'linear-gradient(135deg, rgba(10,92,255,0.18), rgba(0,180,120,0.14))'
    }
  },
  {
    id: 2,
    city: mk({ fa: 'دبی', en: 'Dubai' }),
    country: mk({ fa: 'امارات', en: 'UAE' }),
    title: mk({ fa: 'تور دبی ۳ شب + پرواز + ترانسفر', en: 'Dubai — 3 Nights + Flight + Transfers' }),
    nights: 3,
    days: 4,
    category: 'luxury',
    style: 'luxury',
    price: 25900000,
    rating: 4.7,
    seatsLeft: 5,
    bestSeason: mk({ fa: 'پاییز/زمستان', en: 'Fall/Winter' }),
    highlights: [
      mk({ fa: 'تور سافاری', en: 'Desert safari' }),
      mk({ fa: 'برج خلیفه', en: 'Burj Khalifa' }),
      mk({ fa: 'خرید در دبی مال', en: 'Dubai Mall shopping' })
    ],
    includes: [
      mk({ fa: 'پرواز رفت و برگشت', en: 'Round-trip flight' }),
      mk({ fa: 'هتل ۴ یا ۵ ستاره', en: '4/5-star hotel' }),
      mk({ fa: 'ترانسفر', en: 'Transfers' })
    ],
    itinerary: [
      mk({ fa: 'ورود + تحویل اتاق', en: 'Arrival + check-in' }),
      mk({ fa: 'بازدید برج خلیفه + فواره‌ها', en: 'Burj Khalifa + fountains' }),
      mk({ fa: 'سافاری + شام', en: 'Safari + dinner' }),
      mk({ fa: 'بازگشت', en: 'Return' })
    ],
    cover: {
      gradient: 'linear-gradient(135deg, rgba(245,158,11,0.16), rgba(10,92,255,0.14))'
    }
  },
  {
    id: 3,
    city: mk({ fa: 'کیش', en: 'Kish' }),
    country: mk({ fa: 'ایران', en: 'Iran' }),
    title: mk({ fa: 'تور کیش ۲ شب (اقتصادی)', en: 'Kish — 2 Nights (Budget)' }),
    nights: 2,
    days: 3,
    category: 'beach',
    style: 'budget',
    price: 7900000,
    rating: 4.5,
    seatsLeft: 12,
    bestSeason: mk({ fa: 'پاییز/زمستان', en: 'Fall/Winter' }),
    highlights: [
      mk({ fa: 'تفریحات دریایی', en: 'Sea activities' }),
      mk({ fa: 'بازارگردی', en: 'Shopping' }),
      mk({ fa: 'وقت آزاد', en: 'Free time' })
    ],
    includes: [
      mk({ fa: 'پرواز رفت و برگشت', en: 'Round-trip flight' }),
      mk({ fa: 'هتل ۳ ستاره', en: '3-star hotel' })
    ],
    itinerary: [
      mk({ fa: 'ورود + ساحل', en: 'Arrival + beach' }),
      mk({ fa: 'گشت جزیره', en: 'Island tour' }),
      mk({ fa: 'بازگشت', en: 'Return' })
    ],
    cover: {
      gradient: 'linear-gradient(135deg, rgba(0,180,120,0.16), rgba(122,162,255,0.16))'
    }
  },
  {
    id: 4,
    city: mk({ fa: 'آنتالیا', en: 'Antalya' }),
    country: mk({ fa: 'ترکیه', en: 'Turkey' }),
    title: mk({ fa: 'تور آنتالیا ۵ شب + All Inclusive', en: 'Antalya — 5 Nights (All Inclusive)' }),
    nights: 5,
    days: 6,
    category: 'beach',
    style: 'special',
    price: 32900000,
    rating: 4.9,
    seatsLeft: 4,
    bestSeason: mk({ fa: 'بهار/تابستان', en: 'Spring/Summer' }),
    highlights: [
      mk({ fa: 'هتل All Inclusive', en: 'All inclusive hotel' }),
      mk({ fa: 'ساحل اختصاصی', en: 'Private beach' }),
      mk({ fa: 'تفریحات آبی', en: 'Water sports' })
    ],
    includes: [
      mk({ fa: 'پرواز رفت و برگشت', en: 'Round-trip flight' }),
      mk({ fa: 'هتل All Inclusive', en: 'All inclusive stay' }),
      mk({ fa: 'ترانسفر', en: 'Transfers' })
    ],
    itinerary: [
      mk({ fa: 'ورود + تحویل اتاق', en: 'Arrival + check-in' }),
      mk({ fa: 'استراحت و ساحل', en: 'Beach & relax' }),
      mk({ fa: 'گشت شهری', en: 'City walk' }),
      mk({ fa: 'وقت آزاد', en: 'Free time' }),
      mk({ fa: 'بازگشت', en: 'Return' })
    ],
    cover: {
      gradient: 'linear-gradient(135deg, rgba(10,92,255,0.14), rgba(245,158,11,0.16))'
    }
  },
  {
    id: 5,
    city: mk({ fa: 'تفلیس', en: 'Tbilisi' }),
    country: mk({ fa: 'گرجستان', en: 'Georgia' }),
    title: mk({ fa: 'تور تفلیس ۳ شب + گشت شهری', en: 'Tbilisi — 3 Nights + City Tour' }),
    nights: 3,
    days: 4,
    category: 'city',
    style: 'value',
    price: 14900000,
    rating: 4.6,
    seatsLeft: 10,
    bestSeason: mk({ fa: 'بهار', en: 'Spring' }),
    highlights: [
      mk({ fa: 'حمام‌های گوگردی', en: 'Sulfur baths' }),
      mk({ fa: 'خیابان روستاولی', en: 'Rustaveli avenue' })
    ],
    includes: [mk({ fa: 'پرواز + هتل', en: 'Flight + hotel' })],
    itinerary: [
      mk({ fa: 'ورود + قدم‌زدن در شهر', en: 'Arrival + walk' }),
      mk({ fa: 'گشت شهری', en: 'City tour' }),
      mk({ fa: 'وقت آزاد', en: 'Free time' }),
      mk({ fa: 'بازگشت', en: 'Return' })
    ],
    cover: { gradient: 'linear-gradient(135deg, rgba(86,226,184,0.14), rgba(10,92,255,0.12))' }
  },
  {
    id: 6,
    city: mk({ fa: 'ایروان', en: 'Yerevan' }),
    country: mk({ fa: 'ارمنستان', en: 'Armenia' }),
    title: mk({ fa: 'تور ایروان ۲ شب + خرید و طبیعت', en: 'Yerevan — 2 Nights + Shopping & Nature' }),
    nights: 2,
    days: 3,
    category: 'city',
    style: 'budget',
    price: 10900000,
    rating: 4.4,
    seatsLeft: 9,
    bestSeason: mk({ fa: 'بهار/تابستان', en: 'Spring/Summer' }),
    highlights: [mk({ fa: 'کاسکاد', en: 'Cascade complex' }), mk({ fa: 'گشت طبیعت', en: 'Nature trip' })],
    includes: [mk({ fa: 'اتوبوس VIP + هتل', en: 'VIP bus + hotel' })],
    itinerary: [mk({ fa: 'حرکت', en: 'Departure' }), mk({ fa: 'گشت', en: 'Tours' }), mk({ fa: 'بازگشت', en: 'Return' })],
    cover: { gradient: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(86,226,184,0.14))' }
  },
  {
    id: 7,
    city: mk({ fa: 'باکو', en: 'Baku' }),
    country: mk({ fa: 'آذربایجان', en: 'Azerbaijan' }),
    title: mk({ fa: 'تور باکو ۳ شب + گشت شهری', en: 'Baku — 3 Nights + City Tour' }),
    nights: 3,
    days: 4,
    category: 'city',
    style: 'popular',
    price: 16900000,
    rating: 4.6,
    seatsLeft: 6,
    bestSeason: mk({ fa: 'بهار/پاییز', en: 'Spring/Fall' }),
    highlights: [mk({ fa: 'شهر قدیم', en: 'Old city' }), mk({ fa: 'بلوار ساحلی', en: 'Seafront boulevard' })],
    includes: [mk({ fa: 'پرواز + هتل + ویزا', en: 'Flight + hotel + visa' })],
    itinerary: [
      mk({ fa: 'ورود', en: 'Arrival' }),
      mk({ fa: 'گشت شهری', en: 'City tour' }),
      mk({ fa: 'خرید', en: 'Shopping' }),
      mk({ fa: 'بازگشت', en: 'Return' })
    ],
    cover: { gradient: 'linear-gradient(135deg, rgba(10,92,255,0.12), rgba(255,255,255,0.08))' }
  },
  {
    id: 8,
    city: mk({ fa: 'مسقط', en: 'Muscat' }),
    country: mk({ fa: 'عمان', en: 'Oman' }),
    title: mk({ fa: 'تور مسقط ۴ شب + ساحل و آرامش', en: 'Muscat — 4 Nights + Beach & Relax' }),
    nights: 4,
    days: 5,
    category: 'beach',
    style: 'value',
    price: 23900000,
    rating: 4.7,
    seatsLeft: 8,
    bestSeason: mk({ fa: 'زمستان', en: 'Winter' }),
    highlights: [mk({ fa: 'سواحل خلوت', en: 'Quiet beaches' }), mk({ fa: 'بازدید مسجد جامع', en: 'Grand Mosque visit' })],
    includes: [mk({ fa: 'پرواز + هتل', en: 'Flight + hotel' })],
    itinerary: [
      mk({ fa: 'ورود', en: 'Arrival' }),
      mk({ fa: 'ساحل', en: 'Beach day' }),
      mk({ fa: 'گشت شهری', en: 'City tour' }),
      mk({ fa: 'وقت آزاد', en: 'Free time' }),
      mk({ fa: 'بازگشت', en: 'Return' })
    ],
    cover: { gradient: 'linear-gradient(135deg, rgba(0,180,120,0.12), rgba(245,158,11,0.12))' }
  }
]

export const categories = [
  { key: 'all', label: mk({ fa: 'همه', en: 'All' }) },
  { key: 'city', label: mk({ fa: 'شهری', en: 'City' }) },
  { key: 'beach', label: mk({ fa: 'ساحلی', en: 'Beach' }) },
  { key: 'luxury', label: mk({ fa: 'لوکس', en: 'Luxury' }) }
]
