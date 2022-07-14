const wakeUpApps = async () => {
  const apps = [
    'https://interplanetary-academy.herokuapp.com/',
    'https://deveq.herokuapp.com/',
    'https://bug-stops-here.herokuapp.com/'
  ]
  try {
    await Promise.any(apps.map(async app => {await fetch(app)}));
  } catch (err) {
    console.error(err)
  }
}

wakeUpApps();