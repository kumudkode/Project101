# Security
- Security is not just about code its how we think and manage flaws in our website
- Security is a process not a product
- Always keep your dependencies up to date
- Use tools like npm audit to check for vulnerabilities in your dependencies
- Use environment variables to store sensitive information like API keys and database credentials
- Implement proper error handling to avoid exposing sensitive information
- Use HTTPS to encrypt data transmitted between the client and server
- Regularly back up your data to prevent loss in case of a security breach
- Educate yourself and your team about common security threats like SQL injection, XSS, CSRF, etc.
- Use security headers like Content Security Policy (CSP), X-Content-Type-Options, X-Frame-Options, etc. to protect against common attacks


---
We have to look to our system from High level and model .
What kind of threat could show up in our design
We gonna handle this via a 
STRIDE
S = Spoofing (Could someone pretend to be someone else?)
T = Tampering (Could someone change data they shouldn’t?)
R = Repudiation (Could someone do something and deny it later?)
I = Information Disclosure (Could private data leak out?)
D = Denial of Service (Could someone stop the app from working?)
E = Elevation of Privilege (Could someone get powers they shouldn’t have?)

