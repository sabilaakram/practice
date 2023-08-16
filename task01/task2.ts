function ToTitleCase(personname: string) {
    return personname
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  const inputString = "hello World";
  const titleCaseString = ToTitleCase(inputString);
  console.log(titleCaseString);