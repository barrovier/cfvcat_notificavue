import socketserver
import http.server
import urllib.request
import shutil

PORT = 9097
class MyProxy(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        url="https://crf3.w3nexus.net/cfvcat_tgneram/x/cfvcat/api/%s" % self.path[1:]
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-Type', 'application/json; charset=ISO-8859-1')
        self.end_headers()
        with urllib.request.urlopen(url) as response:
            self.copyfile(response, self.wfile)

    def copyfile(self, source, outputfile):
        shutil.copyfileobj(source, outputfile)


httpd = socketserver.ForkingTCPServer(('', PORT), MyProxy)
print("Now serving at", str(PORT))
httpd.serve_forever()
