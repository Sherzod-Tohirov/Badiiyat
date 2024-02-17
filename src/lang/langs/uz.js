export const uz = {
   languages: [
      {
         id: 1,
         code: 'uz',
         value: 'Uzbek'
      },
      {
         id: 2,
         code: 'ru',
         value: 'Rus'
      },
      {
         id: 3,
         code: 'en',
         value: 'Ingliz'
      }
   ],
   genres: [
      {
         id: 1,
         value: 'Temuriylar davri'
     },
     {
         id: 2,
         value: 'Jadid adabiyoti'
     },
     {
         id: 3,
         value: 'Sovet davri'
     },
     {
         id: 4,
         value: 'Mustaqillik davri'
     }
   ],
   header: {
      home: "Bosh sahifa",
      books: "Kitoblar",
      subheader: {
        profile: "Profil",
        add_author: "Muallif qo'shish",
        add_book: "Kitob qo'shish",
        logout: "Chiqish"
      }
   },
   slider: {
      first: {
         title: "Temuriylar davri adabiyoti",
      },
      second: {
         title: "Jadid adabiyoti ",
      },
      third: {
         title: "Sovet davri",
      },
      fourth: {
         title: "Mustaqillik davri",
      },

   },
   search: {
      title: "Qidirish",
      placeholder: "Adiblar, kitoblar, audiolar, maqolalar...",
      button: "Izlash"
   },
   categories: {
      title: "Asosiy kategoriyalar",
      subcategories: {
         first: "Temuriylar davri",
         second: "Jadid adabiyoti",
         third: "Sovet davri",
         fourth: "Mustaqillik davri"
      }
   },

   add_author: {
      title: "Muallif qo'shish",
      button: {
         title: "Yaratish"
      }
   },
   add_book: {
      title: "Kitob qo'shish",
      button: {
         title: "Yaratish"
      }
   },
   profile: {
      list: {
         profile: "Profil",
         security: "Xavfsizlik",
         settings: "Sozlamalar",
      },
      button: {
         save_changes: "Saqlash"
      },
      main: {
         title: "Mening Profilim",
         first_name: {
            title: "Ism",
            info: "Iltimos, ismingizni kiriting.",
            validation: {
               required: "Ism kirgizilishi shart !",
               invalid: "Ism xato kiritildi !",
            }
         },
         last_name: {
            title: "Familiya",
            info: "Iltimos, familiyangizni kiriting.",
            validation: {
               required: "Familiya kirgizilishi shart !",
               invalid: "Familiya xato kiritildi !",
            }
         },
         phone: {
            title: "Telefon",
            info: "Iltimos, telefon raqamingizni kiriting.",
            validation: {
               required: "Telefon raqam kirgizilishi shart !",
               invalid: "Telefon raqam xato kiritildi !",
            }
         }
   
      },

      security: {
         title: "Parolni o'zgartirish yoki yangilash",
         email: {
            title: "Email",
            info: "Iltimos, emailingizni kiriting.",
            validation: {
               required: "Email kirgizilishi shart !",
               invalid: "Email xato kiritildi !",
            }
         },
         current_password: {
            title: "Joriy parol",
            info: "Iltimos, joriy parolingizni kiriting.",
            validation: {
               required: "Joriy parol kirgizilishi shart !",
               invalid: "Joriy parol xato kiritildi !",
            }
         },
         new_password: {
            title: "Yangi parol",
            info: "Iltimos, yangi parolingizni kiriting.",
            validation: {
               required: "Yangi parol kirgizilishi shart !",
               invalid: "Yangi parol xato kiritildi !",
            }
         }
   
      },

      settings: {
         title: "Sozlamalar",
         language: {
            title: "Til",
            info: "Iltimos, tilni tanlang.",
            validation: {
               required: "Til kirgizilishi shart !",
               invalid: "Til xato tanlandi !",
            }
         },
         theme: {
            title: "Mavzu",
            info: "",
            validation: {
               required: "Mavzu kirgizilishi shart !",
               invalid: "Mavzu xato kiritildi !",
            }
         },
   
      },

   },
   notifications: {
       edited: {
         title: "Muvaffaqiyatli o'zgartirildi !"
       },
       updated: {
         title: "Muvaffaqiyatli o'zgartirildi !"
       },
       deleted: {
         title: "Muvaffaqiyatli o'chirildi !"
       },
       created: {
         title: "Muvaffaqiyatli yaratildi !"
       },
       error: {
         title: "Xatolik yuz berdi !"
       },
       welcome: {
         title: "Xush kelibsiz "
       },
       welcome_back: {
         title: "Yana bir bor, xush kelibsiz "
       }
   },
   login : {
      title: "Login",
      desc: "Shaxsiy sahifangiz yo'qmi?",
      button: {
         title: "Tasdiqlash"
      }
   },
   register: {
      title: "Registratsiya",
      desc: "Sahifangiz bormi?",
      button: {
         title: "Tasdiqlash"
      }
   },
   input: {
      first_name: {
         title: "Ism",
         validation: {
            required: "Ism, kiritish majburiy !",
         }
      },
      last_name: {
         title: "Familiya",
         validation: {
            required: "Familiya, kiritish majburiy !",
         }
      },
      phone: {
         title: "Telefon raqam",
         validation: {
            required: "Telefon raqam, kiritish majburiy !",
            invalid: "Telefon raqam, xato kiritildi !"
         }
      },
      email: {
         title: "Email",
         validation: {
            required: "Email, kiritish majburiy !",
            invalid: "Email, xato kiritildi !",
            exist: "Email, allaqachon mavjud !",
         }
      },
      password: {
         title: "Parol",
         validation: {
            required: "Parol, kiritish majburiy !",
            invalid: "Parol to'g'ri formatda emas !"
         }
      },
      dob: {
         title: "Tug'ilgan sana",
         validation: {
            required: "Tug'ilgan sana, kiritish majburiy !",
            invalid: "Tug'ilgan sana to'g'ri formatda emas !"
         }
      },
      dod: {
         title: "Vafot etgan sana",
         validation: {
            required: "Vafot etgan sana, kiritish majburiy !",
            invalid: "Vafot etgan sana to'g'ri formatda emas !"
         }
      },
      country: {
         title: "Mamlakat",
         validation: {
            required: "Mamlakat, kiritish majburiy !",
            invalid: "Mamlakat to'g'ri formatda emas !"
         }
      },
      genre: {
         title: "Janr",
         validation: {
            required: "Janr, kiritish majburiy !",
            invalid: "Janr to'g'ri formatda emas !"
         }
      },
      bio: {
         title: "Biografiya",
         validation: {
            required: "Biografiya, kiritish majburiy !",
            invalid: "Biografiya to'g'ri formatda emas !"
         }
      },
      drag: {
         title: "Yuklash uchun faylni ushbu hududga bosing yoki ustiga qo'ying",
         validation: {
            required: "Rasm yuklash majburiy !",
            invalid: "Rasm to'g'ri formatda emas !"
         }
      },
      title: {
         title: "Sarlavha",
         validation: {
            required: "Sarlavha, kiritish majburiy !",
            invalid: "Sarlavha to'g'ri formatda emas !"
         }
      },
      pages: {
         title: "Varoqlar soni",
         validation: {
            required: "Varoqlar soni, kiritish majburiy !",
            invalid: "Varoqlar soni to'g'ri formatda emas !"
         }
      },
      year: {
         title: "Yil",
         validation: {
            required: "Yilni, kiritish majburiy !",
            invalid: "Yil to'g'ri formatda emas !"
         }
      },
      price: {
         title: "Narxi",
         validation: {
            required: "Narxni, kiritish majburiy !",
            invalid: "Narx to'g'ri formatda emas !"
         }
      },
      author: {
         title: "Muallif",
         validation: {
            required: "Muallifni, kiritish majburiy !",
            invalid: "Maullif to'g'ri formatda emas !"
         }
      },
      file: {
         title: "Rasmni yuklash",
         validation: {
            required: "Rasmni, yuklash majburiy !",
            invalid: "Rasm to'g'ri formatda emas !"
         }
      }
   },
   author_books: {
      title: "Asarlari",
      button: {
         title: "Barchasini ko'rish"
      }
   },
   about_author: {
      dob: {
         title: "Tavallud sanasi"
      },
      dod: {
         title: "Vafot etgan sana"
      }
   },
   about_book: {
      pages: {
         title: "Sahifalar soni",
         sub_title: "varoq"
      },
      printed_at: {
         title: "Chop etilgan",
         sub_title: "yillar"
      },
      price: {
         title: "Kitob narxi",
         sub_title: {
            uz: "so'm",
            ru: "₽",
            en: "$"
         }
      },
      info: {
         title: "To'liq ma'lumot"
      }
   },
   not_found: {
      title: "Kechirasiz, hech narsa topilmadi !"
   }
}