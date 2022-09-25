class HelpersApi
{
static ip = "http://192.168.0.111:3000/";
static async PostRequest(url,body)
{
    return await fetch(this.ip+url, {
							method: 'POST',
							body: body,
							headers: {
								'Content-Type': 'application/json',
								Accept: 'application/json',
							  }
						  });
	
				
    }
static async GetRequest(url,params)
{
    var finalUrl =this.ip + url + params;
    return await fetch(finalUrl)
    .then(response => response.json());

  
						

}

}

export default HelpersApi;

