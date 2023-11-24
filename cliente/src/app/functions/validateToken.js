import { jwtVerify } from 'jose';

const validateToken = async (token) => {
    const secret = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2OTgxODMwNDMsImV4cCI6MTcyOTcxOTA0MywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.6ErA26cyYGoo_d8niwYzIntLTluMskY0cWlEi6CD-QM";
    try{
        const isTokenValid = await jwtVerify(token, new TextEncoder().encode(secret))
        console.log(isTokenValid)
        if(isTokenValid){
            return true
        }
    } catch {
        return false
    }
}   
export {validateToken};