import i18n from "i18next";
import { initReactI18next } from "react-i18next";
i18n.use(initReactI18next).init({
  debugger: true,
  resources: {
    uz: {
      translation: {
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
    },
    ru: {
      translation: {
        languages: [
           {
              id: 1,
              code: 'uz',
              value: 'Узбекский'
           },
           {
              id: 2,
              code: 'ru',
              value: 'Русский'
           },
           {
              id: 3,
              code: 'en',
              value: 'Английский'
           }
        ],
        genres: [
           {
              id: 1,
              value: 'Период Тимуридов'
          },
          {
              id: 2,
              value: 'Джадидская литература'
          },
          {
              id: 3,
              value: 'Советская эпоха'
          },
          {
              id: 4,
              value: 'Период независимости'
          }
        ],
         header: {
            home: "Главная страница",
            books: "Книги",
            subheader: {
              profile: "Профиль",
              add_author: "Добавить автора",
              add_book: "Добавить книгу",
              logout: "Выйти"
            }
         },
         slider: {
           first: {
              title: "Литература периода Тимуридов",
           },
           second: {
              title: "Джадидская литература",
           },
           third: {
              title: "Советская эпоха",
           },
           fourth: {
              title: "Период независимости",
           },
     
        },
        search: {
           title: "Поиск",
           placeholder: "Литература, книги, аудиозаписи, статьи...",
           button: "Поиск"
        },
        categories: {
           title: "Основные категории",
           subcategories: {
              first: "Период Тимуридов",
              second: "Джадидская литература",
              third: "Советская эпоха",
              fourth: "Период независимости"
           }
        },
     
        add_author: {
           title: "Добавить автора",
           button: {
              title: "Создавать"
           }
        },
     
        add_book: {
           title: "Добавить книгу",
           button: {
              title: "Создавать"
           }
        },
     
        profile: {
           list: {
              profile: "Профиль",
              security: "Безопасность",
              settings: "Настройки",
           },
           button: {
              save_changes: "Сохранить изменения"
           },
           main: {
              title: "Мой профайл",
              first_name: {
                 title: "Имя",
                 info: "Пожалуйста, введите ваше имя.",
                 validation: {
                    required: "Имя обязательно !",
                    invalid: "Имя недействительно !",
                 }
              },
              last_name: {
                 title: "Фамилия",
                 info: "Пожалуйста, введите свою фамилию.",
                 validation: {
                    required: "Фамилия обязательна !",
                    invalid: "Фамилия недействительна !",
                 }
              },
              phone: {
                 title: "Телефон",
                 info: "Пожалуйста введите ваш номер телефона.",
                 validation: {
                    required: "Номер телефона обязателен!",
                    invalid: "Номер телефона недействителен!",
                 }
              }
        
           },
     
           security: {
              title: "Измените или восстановите свой пароль",
              email: {
                 title: "Электронная почта",
                 info: "Пожалуйста, введите свой адрес электронной почты.",
                 validation: {
                    required: "Электронная почта обязательна !",
                    invalid: "Электронная почта недействительна !",
                    exist: "Электронная почта уже существует !",
                 }
              },
              current_password: {
                 title: "Текущий пароль",
                 info: "Пожалуйста введите ваш пароль.",
                 validation: {
                    required: "Требуется текущий пароль !",
                    invalid: "Текущий пароль недействителен !",
                 }
              },
              new_password: {
                 title: "Новый пароль",
                 info: "Пожалуйста, введите новый пароль.",
                 validation: {
                    required: "Требуется новый пароль !",
                    invalid: "Новый пароль недействителен !",
                 }
              }
        
           },
     
           settings: {
              title: "Настройки",
              language: {
                 title: "Язык",
                 info: "Пожалуйста, выберите язык",
                 validation: {
                    required: "Язык обязателен !",
                    invalid: "Язык недействителен !",
                 }
              },
              theme: {
                 title: "Тема",
                 info: "",
                 validation: {
                    required: "Тема обязательна !",
                    invalid: "Тема недействительна !",
                 }
              },
        
           },
     
        },
        notifications: {
           edited: {
             title: "Редактирование прошло успешно !"
           },
           updated: {
             title: "Обновление прошло успешно !"
           },
           deleted: {
             title: "Удаление прошло успешно !"
           },
           created: {
             title: "Создание прошло успешно !"
           },
           error: {
             title: "Возникла ошибка !"
           },
           welcome: {
             title: "Добро пожаловать "
           },
           welcome_back: {
             title: "Добро пожаловать "
           }
       },
        login : {
           title: "Логин",
           desc: "Еще не регистрировались?",
           button: {
              title: "Следующий шаг"
           }
        },
        register: {
           title: "Регистрация",
           desc: "У вас уже есть аккаунт?",
           button: {
              title: "Следующий шаг"
           }
        },
        input: {
           first_name: {
              title: "Имя",
              validation: {
                 required: "Имя обязательно !",
              }
           },
           last_name: {
              title: "Фамилия",
              validation: {
                 required: "Фамилия обязательна !",
              }
           },
           phone: {
              title: "Телефон",
              validation: {
                 required: "Телефон обязателен !",
                 invalid: "Телефон указан неверно !"
              }
           },
           email: {
              title: "Электронная почта",
              validation: {
                 required: "Электронная почта обязательна !",
                 invalid: "Электронная почта указана неверно !",
                 exist: "Электронная почта уже существует !",
              }
           },
           password: {
              title: "Пароль",
              validation: {
                 required: "Необходим пароль !",
                 invalid: "Пароль имеет неверный формат !"
              }
           },
           dob: {
              title: "Дата рождения",
              validation: {
                 required: "Дата рождения обязательна !",
                 invalid: "Дата рождения недействительна !"
              }
           },
           dod: {
              title: "Дата смерти",
              validation: {
                 required: "Дата смерти обязательна !",
                 invalid: "Дата смерти недействительна !"
              }
           },
           country: {
              title: "Страна",
              validation: {
                 required: "Страна обязательна !",
                 invalid: "Страна недействительна !"
              }
           },
           genre: {
              title: "Жанр",
              validation: {
                 required: "Жанр обязателен !",
                 invalid: "Жанр недействителен !"
              }
           },
           bio: {
              title: "Биография",
              validation: {
                 required: "Биография обязательна !",
                 invalid: "Биография недействительна !"
              }
           },
           drag: {
              title: "Нажмите или перетащите файл в эту область, чтобы загрузить",
              validation: {
                 required: "Требуется загрузка изображения !",
                 invalid: "Загрузка изображения недействительна !"
              }
           },
           title: {
              title: "Заголовок",
              validation: {
                 required: "Загаловок обязателен !",
                 invalid: "Загаловок недействителен !"
              }
           },
           pages: {
              title: "Страницы",
              validation: {
                 required: "Страницы обязательны !",
                 invalid: "Страницы недействительны !"
              }
           },
           year: {
              title: "Год",
              validation: {
                 required: "Год обязателен !",
                 invalid: "Год недействителен !"
              }
           },
           price: {
              title: "Цена",
              validation: {
                 required: "Цена обязательна !",
                 invalid: "Цена недействительна !"
              }
           },
           author: {
              title: "Автор",
              validation: {
                 required: "Требуется автор !",
                 invalid: "Автор недействителен !"
              }
           },
           file: {
              title: "Загрузить изображение",
              validation: {
                 required: "Изображение должно быть загружено !",
                 invalid: "Изображение не в правильном формате !"
              }
           }
        },
        author_books: {
           title: "Книги",
           button: {
              title: "Увидеть все"
           }
        },
        about_author: {
           dob: {
              title: "Дата рождения"
           },
           dod: {
              title: "Дата смерти"
           }
        },
        about_book: {
           pages: {
              title: "Количество страниц",
              sub_title: "страница"
           },
           printed_at: {
              title: "Год издания",
              sub_title: "годы"
           },
           price: {
              title: "Цена книги",
              sub_title: {
                 uz: "сум",
                 ru: "₽",
                 en: "$"
              }
           },
           info: {
              title: "Полная информация"
           }
        },
        not_found: {
           title: "Извините, ничего не найдено !"
        }
      }
    },
    en: {
      translation: {
        languages: [
           {
              id: 1,
              code: 'uz',
              value: 'Uzbek'
           },
           {
              id: 2,
              code: 'ru',
              value: 'Russian'
           },
           {
              id: 3,
              code: 'en',
              value: 'English'
           }
        ],
        genres: [
           {
              id: 1,
              value: 'Timurid period'
          },
          {
              id: 2,
              value: 'Jadid literature'
          },
          {
              id: 3,
              value: 'Soviet era'
          },
          {
              id: 4,
              value: 'Independence period'
          }
        ],
         header: {
            home: "Home",
            books: "Books",
            subheader: {
              profile: "Profile",
              add_author: "Add author",
              add_book: "Add book",
              logout: "Logout"
            }
         },
         slider: {
           first: {
              title: "Literature of the Timurid period",
           },
           second: {
              title: "Jadid literature",
           },
           third: {
              title: "Soviet era",
           },
           fourth: {
              title: "Independence period",
           },
     
        },
        search: {
           title: "Search",
           placeholder: "Literature, books, audios, articles...",
           button: "Search"
        },
        categories: {
           title: "Main categories",
           subcategories: {
              first: "Timurid period",
              second: "Jadid literature",
              third: "Soviet era",
              fourth: "Independence period"
           }
        },
        add_author: {
           title: "Add author",
           button: {
              title: "Create"
           }
        },
     
        add_book: {
           title: "Add book",
           button: {
              title: "Create"
           }
        },
     
        profile: {
           list: {
              profile: "Profile",
              security: "Security",
              settings: "Settings",
           },
           button: {
              save_changes: "Save Changes"
           },
           main: {
              title: "My Profile",
              first_name: {
                 title: "First name",
                 info: "Please enter your first name.",
                 validation: {
                    required: "First name is required !",
                    invalid: "First name is invalid !",
                 }
              },
              last_name: {
                 title: "Last name",
                 info: "Please enter your last name.",
                 validation: {
                    required: "Last name is required !",
                    invalid: "Last name is invalid !",
                 }
              },
              phone: {
                 title: "Phone",
                 info: "Please enter your phone number.",
                 validation: {
                    required: "Phone number is required !",
                    invalid: "Phone number is invalid !",
                 }
              }
        
           },
     
           security: {
              title: "Change or Recover Your Password",
              email: {
                 title: "Email",
                 info: "Please enter your email.",
                 validation: {
                    required: "Email is required !",
                    invalid: "Email is invalid !",
                    exist: "Email is already exist !",
                 }
              },
              current_password: {
                 title: "Current password",
                 info: "Please enter your password",
                 validation: {
                    required: "Current password is required !",
                    invalid: "Current password is invalid !",
                 }
              },
              new_password: {
                 title: "New password",
                 info: "Please enter your new password",
                 validation: {
                    required: "New password is required !",
                    invalid: "New password is invalid !",
                 }
              }
        
           },
     
           settings: {
              title: "Settings",
              language: {
                 title: "Language",
                 info: "Please select language",
                 validation: {
                    required: "Language is required !",
                    invalid: "Language is invalid !",
                 }
              },
              theme: {
                 title: "Theme",
                 info: "",
                 validation: {
                    required: "Theme is required !",
                    invalid: "Theme is invalid !",
                 }
              },
        
           },
     
        },
        notifications: {
           edited: {
             title: "Succussfully edited !"
           },
           updated: {
             title: "Succussfully updated !"
           },
           deleted: {
             title: "Succussfully deleted !"
           },
           created: {
             title: "Succussfully created !"
           },
           error: {
             title: "Sorry, unknown error occurred !"
           },
           welcome: {
             title: "Welcome"
           },
           welcome_back: {
             title: "Welcome back"
           }
       },
       login : {
        title: "Login",
        desc: "Do not have an account?",
        button: {
           title: "Create"
        }
     },
     register: {
        title: "Register",
        desc: "Already have an account?",
        button: {
           title: "Create"
        }
     },
       input: {
        first_name: {
           title: "First name",
           validation: {
              required: "First name is required !",
           }
        },
        last_name: {
           title: "Last name",
           validation: {
              required: "Last name is required !",
           }
        },
        phone: {
           title: "Phone",
           validation: {
              required: "Phone is required !",
           }
        },
        email: {
           title: "Email",
           validation: {
              required: "Email is required !",
              invalid: "Email is invalid !",
              exist: "Email already exists !",
           }
        },
        password: {
           title: "Password",
           validation: {
              required: "Password, kiritish majburiy !",
              invalid: "Password is invalid !",
           }
        },
        dob: {
           title: "Date of birth",
           validation: {
              required: "Date of birth is required !",
              invalid: "Date of birth is invalid !"
           }
        },
        dod: {
           title: "Date of death",
           validation: {
              required: "Date of death is required !",
              invalid: "Date of death is invalid !"
           }
        },
        country: {
           title: "Country",
           validation: {
              required: "Country is required !",
              invalid: "Country is invalid !"
           }
        },
        genre: {
           title: "Genre",
           validation: {
              required: "Genre is required !",
              invalid: "Genre is invalid !"
           }
        },
        bio: {
           title: "Bio",
           validation: {
              required: "Biography is required !",
              invalid: "Biography is invalid !"
           }
        },
        drag: {
           title: "Click or drag file to this area to upload",
           validation: {
              required: "Image upload is required !",
              invalid: "Image is invalid !"
           }
        },
        title: {
           title: "Title",
           validation: {
              required: "Title is required !",
              invalid: "Title is invalid !"
           }
        },
        pages: {
           title: "Pages",
           validation: {
              required: "Pages are required !",
              invalid: "Pages are invalid !"
           }
        },
        year: {
           title: "Year",
           validation: {
              required: "Year is required !",
              invalid: "Year is invalid !"
           }
        },
        price: {
           title: "Price",
           validation: {
              required: "Price is required !",
              invalid: "Price is invalid !"
           }
        },
        author: {
           title: "Author",
           validation: {
              required: "Author is required !",
              invalid: "Author is invalid !"
           }
        },
        file: {
           title: "Upload an image",
           validation: {
              required: "Upload an image is required !",
              invalid: "Image is in invalid format !"
           }
        }
     },
     author_books: {
        title: "Books",
        button: {
           title: "See all"
        }
     },
     about_author: {
        dob: {
           title: "Date of birth"
        },
        dod: {
           title: "Date of death"
        }
     },
     about_book: {
        pages: {
           title: "Number of pages",
           sub_title: "page"
        },
        printed_at: {
           title: "Printed at",
           sub_title: "years"
        },
        price: {
           title: "Price",
           sub_title: {
              uz: "soum",
              ru: "₽",
              en: "$"
           }
        },
        info: {
           title: "Detailed information"
        }
     },
     not_found: {
        title: "Sorry, nothing is found !"
     }
     
     
      }
    },
  },
  lng: "uz",
  fallbackLng: localStorage.getItem("lang") || "uz",

  interpolation: {
    escapeValue: false,
  },
});
