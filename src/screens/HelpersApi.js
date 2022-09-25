class HelpersApi
{

static async PostRequest(url,body)
{
    return await fetch(url, {
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
    var finalUrl = url + params;
    return await fetch(finalUrl)
    .then(response => response.json());

  
						

}

}

export default HelpersApi;

