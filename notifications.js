Skip to content
Product
Solutions
Open Source
Pricing
Search
Sign in
Sign up
IcyKit
/
telegram-bot-for-students
Public
Code
Issues
Pull requests
Actions
Projects
Security
Insights
telegram-bot-for-students/notifications.js /
@IcyKit
IcyKit Updated: notifications file added
Latest commit ca64ceb on Aug 18, 2022
 History
 1 contributor
33 lines (31 sloc)  1.29 KB

export function notifications(messages, group, stepType, bot) {
  const startDate = {
    year: group.startDate.getFullYear(),
    month: group.startDate.getMonth(),
    date: group.startDate.getDate(),
    hours: group.startDate.getHours(),
    minutes: group.startDate.getMinutes(),
  }
  
  if (stepType === 'minutes') {
    messages.forEach(message => {
      message.goalDate = new Date(startDate.year, startDate.month, startDate.date, startDate.hours, startDate.minutes + message.step).toLocaleString('ru-RU');
    });
  } else if (stepType === 'hours') {
    messages.forEach(message => {
      message.goalDate = new Date(startDate.year, startDate.month, startDate.date, startDate.hours + message.step, startDate.minutes).toLocaleString('ru-RU');
    });
  } else if (stepType === 'days') {
    messages.forEach(message => {
      message.goalDate = new Date(startDate.year, startDate.month, startDate.date + message.step, startDate.hours, startDate.minutes).toLocaleString('ru-RU');
    });
  }

  messages.forEach(message => {
    const intervalID = setInterval(() => {
      const dateNow = new Date().toLocaleString('ru-RU');
      if (dateNow === message.goalDate) {
        bot.sendMessage(group.id, `${message.title} - ${message.link}`);
        clearInterval(intervalID);
      }
    }, 1000)
  });
}
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
telegram-bot-for-students/notifications.js at main · IcyKit/telegram-bot-for-students · GitHub
