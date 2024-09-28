async function getPetById(id) {
    try {
      const response = await fetch(`https://petstore3.swagger.io/api/v3/pet/${id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }

      const result = await response.json();
      console.log('result is: ', JSON.stringify(result));
      return result;
    } catch (error) {
      if (error.message) {
        console.log('error message: ', error.message);
      } else {
        console.log('unexpected error: ', error);
      }
    }
  }
  
getPetById('dxc');
getPetById(1);