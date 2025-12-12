# OWASP Top 10 (2021) Reference
Website: https://owasp.org/Top10/

---

Broken Access Control  
When users can do things they shouldn’t — like editing, deleting, or viewing someone else’s data.

Cryptographic Failures  
When sensitive data (like passwords or card info) isn’t properly protected — think plain text or weak encryption.

Injection  
When untrusted input is treated like code or a command — e.g. SQL, OS, or script injection.

Insecure Design  
When the feature itself was never built with security in mind — missing rules, weak validation, or “trust by default.”

Security Misconfiguration  
When systems or frameworks are set up incorrectly — like leaving debug mode on, or open admin panels.

Vulnerable and Outdated Components  
When old or unpatched libraries, plugins, or dependencies create known security holes.

Identification and Authentication Failures  
When login or session handling is broken — weak passwords, missing checks, or reused tokens.

Software and Data Integrity Failures  
When data or code changes aren’t verified — like untrusted updates, unchecked webhooks, or CI/CD misuse.

Security Logging and Monitoring Failures  
When the app doesn’t log important events or catch suspicious activity, making attacks hard to spot.

Server-Side Request Forgery (SSRF)  
When the server makes requests to other systems without checking what it’s being told to fetch — often leading to internal data leaks.
![alt text](image-3.png)

# OWASP Bug Triage 🔍

         _
        /_/_      .'''.
     =O(_)))) ...'     `.
        \_\              `.    .'''
                           `..'

Example:
Customer passwords are being stored in plain text in the database.
OWASP Top 10: Cryptographic Failures
Fix: Scramble or hash passwords before storing so they can’t be read directly