export default {
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