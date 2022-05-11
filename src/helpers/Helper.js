import axios from "axios";
import Config from "./Config";
const Helper = {
    Request: async(linkUrl,method = "post",payload=null,content_type='application/json')=>{
        let urls = Config.base_url+linkUrl;
        let data = JSON.stringify(payload);

        let result = {};

        var config = {
            method: method,
            url: urls,
            headers: { 
                'Content-Type': content_type,
            },
            data : data
        };

        await axios(config)
        .then(function (response) {
            console.log("gtResponsw",response);
            let data = response.data;
            
            if (!data) {
            result = {
                message: "There seems to be an Error",
                error: true,
                response: null,
            };
            } else {
            result = {
                message: "Success",
                error: false,
                response: response.data,
            };
            }

            
        })
        .catch(function (error) {
        result = {
            message: error.toString(),
            error: true,
            response: null,
        };
        });
        return result;
  },
};

export default Helper;