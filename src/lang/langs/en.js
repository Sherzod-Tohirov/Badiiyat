export default {
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