import { createI18n } from 'vue-i18n'

export const messages = {
    en: {
        message: {
            login: 'Login',
            homepage: 'Home Page',
            contact: 'Contact Us',
            copyrights: 'Copyright © 2021',
            homecontent: 'You are on the homepage now',
            close: "Close",
            title: 'Title',
            name: 'Name',
            email: 'Email',
            password: 'Password',
            contactTitle: "Title",
            contactName:"Name",
            contactPhone:"Phone Number",
            contactEmail:"Email",
            country: "Country",
            send: "Send",
            logout: "Logout"
        }
    },
    tr: {
        message: {
            login: 'Giriş',
            homepage: 'Anasayfa',
            contact: 'İletişim',
            copyrights: 'Tüm hakkı saklıdır. © 2021',
            homecontent:'Şu an anasayfadasınız',
            close: "Kapat",
            title: 'Ünvan',
            name: 'İsim',
            email: 'Email',
            password: 'Parola',
            contactTitle: "Ünvan",
            contactName:"İsim",
            contactPhone:"Telefon Numarası",
            contactEmail:"Email",
            country:"Ülke",
            send: "Gönder",
            logout:"Çıkış"
        }
    }
};

export const i18n = createI18n({
    locale: 'tr',
    fallbackLocale: 'tr',
    messages,
})