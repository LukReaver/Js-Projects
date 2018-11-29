class httpModule{

    constructor(){
        this.myHeaders = new Headers();
        this.myHeaders.append("Content-type", "application/json")
        this.myHeaders.append("Content-type", "text/plain")
    }

    async get(url){
        const request = await fetch(url);
        const response = await request
        return response
    }
    async post(url,ob){
        const request = await fetch(url,{
            method: "post",
            headers: this.myHeaders,
            body:JSON.stringify(ob)
        });      
        const response = await request
        return response
    }
    async put(url,ob){
        const request = await fetch(url,{
            method: "put",
            headers: this.myHeaders,
            body:JSON.stringify(ob)
        });      
        const response = await request
        return response
    }
    async delete(url,ob){
        const request = await fetch(url,{
            method: "delete",
            headers: this.myHeaders,          
        });      
        const response = await 'Resource deleted..'
        return response
    }


}