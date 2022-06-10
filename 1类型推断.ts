/**
 * 类型推断是否成功
 * 
 */

function tryval(url: string, method: "GET" | "POST") {}

interface methodType {
    url: string;
    method:  "GET" | "POST"
}

const req: methodType = { url: "https://example.com", method: "GET"}

const req2 = { url: "https://example.com", method: "GET" as const};

tryval("123", "GET")

tryval(req.url, req.method)
tryval(req2.url, req2.method)