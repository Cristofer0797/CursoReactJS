import axiosConfig2 from "./config/axios-config2";

export function getRandomPrank() {
    return axiosConfig2.get('/',{ 
        validateStatus: function(status) {
            return status < 500;
        }})
}