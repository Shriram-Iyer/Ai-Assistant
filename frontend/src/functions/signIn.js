export const signInHandler = async (event, username,password) => {
    event.preventDefault()
    try {
        const response = await fetch("http://localhost:8081/api/logIn", {
          method:"POST",
          headers: {
            'Content-Type': 'application/json' // Set the Content-Type to application/json
          },
          body:JSON.stringify({username,password})
        });
    
        const result = await response.json()
        if(result.message && result.message==="Login Successful"){
          
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

