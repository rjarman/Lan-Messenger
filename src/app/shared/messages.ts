import {Message} from "./message";
/*
name: string;
    profilePhoto: string;
    messageType: string;
    message: string;
    date: string;
    time: string;

*/


var today =  new Date()

export const MESSAGES: Message[] = [
    {
        userId: '01',
        name: 'Rahul',
        profilePhoto: '../../../assets/profile/rahul.jpg',
        messageType: 'send',
        message: 'Finedffdfsdfsaddsfgsdfsgrdfedgwrtgefedgfbrgfhgdgbdsffgeegwefawegtrgvwrfverwrerwte ert ererfewrf!',
        date: today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate(),
        time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    },
    {
        userId: '02',
        name: 'Adeeb',
        profilePhoto: '../../../assets/profile/rahul.jpg',
        messageType: 'received',
        message: 'Hi!',
        date: today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate(),
        time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    },
    {
        userId: '03',
        name: 'Rahul',
        profilePhoto: '../../../assets/profile/rahul.jpg',
        messageType: 'send',
        message: 'How are you ?',
        date: today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate(),
        time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    },
    {
        userId: '04',
        name: 'Adeeb',
        profilePhoto: '../../../assets/profile/rahul.jpg',
        messageType: 'received',
        message: 'Fine',
        date: today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate(),
        time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    },
    {
        userId: '05',
        name: 'Rahul',
        profilePhoto: '../../../assets/profile/rahul.jpg',
        messageType: 'send',
        message: 'How are you ?',
        date: today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate(),
        time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    },
    {
        userId: '06',
        name: 'Adeeb',
        profilePhoto: '../../../assets/profile/rahul.jpg',
        messageType: 'received',
        message: 'Finedffdfsdfsaddsfgsdfsgrdfedgwrtgefedgfbrgfhgdgbdsffgeegwefawegtrgvwrfverwrerwte ert ererfewrf',
        date: today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate(),
        time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    },
    {
        userId: '07',
        name: 'Rahul',
        profilePhoto: '../../../assets/profile/rahul.jpg',
        messageType: 'send',
        message: 'How are you ?',
        date: today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate(),
        time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    },
    {
        userId: '08',
        name: 'Adeeb',
        profilePhoto: '../../../assets/profile/rahul.jpg',
        messageType: 'received',
        message: 'Finedffdfsdfsaddsfgsdfsgrdfedgwrtgefedgfbrgfhgdgbdsffgeegwefawegtrgvwrfverwrerwte ert ererfewrf',
        date: today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate(),
        time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    }
]
