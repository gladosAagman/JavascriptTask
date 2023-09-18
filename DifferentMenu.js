const printMenu = (WeeklyMenu) => {
    switch (WeeklyMenu.toLowerCase()) {
      case 'monday':
        console.log('Monday Menu:');
        console.log('1. Paneer Paratha');
        console.log('2. Sandwich');
        break;
      case 'tuesday':
        console.log('Tuesday Menu:');
        console.log('1. Aloo Paratha ');
        console.log('2. Burger');
        break;
      case 'wednesday':
        console.log('Wednesday Menu:');
        console.log('1. Samosa');
        console.log('2. Dosa');
        break;
      case 'thursday':
        console.log('Thursday Menu:');
        console.log('1. Chilly Paneer');
        console.log('2. Spring Rolls');
        break;
      case 'friday':
        console.log('Friday Menu:');
        console.log('1. Margherita Pizza');
        console.log('2. Momos');
        break;
      default:
        console.log('Sorry, we are closed on weekends.');
    }
  };
  printMenu('Monday');
