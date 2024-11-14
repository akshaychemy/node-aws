"# node-aws" 
1.connect to remote mongo db and also set up network access
2.create repo in GitHub
3.set inbound rule to http(anywhere)
4.connect to ec2 instance
5.Now got to GitHub settings—>actions—>runners—>new self hosted runner
6.click on linux
7.go to ec2
8.pwd(/home/ububtu)
9.paste all the commands from step6
10.then run the configuration commands from step 6(don't run run.sh yet)
11.the do ls to see files and folders
12.go back to runners (settings—>actions—>runners) it will show status
13.sudo ./svc.sh install (to create sym link)
14.sudo ./svc.sh start (to run as backgroundservice)
15.go to (settings—>secrets and variables—>actions—>new repo secret)
16. Give name as name of project and copy paste all the secrets here[NODE_SECRET]
17.go to (actions—>continuos integration—>node js—>click on config)[ts-18.30]
18.remove pull request code
19.change(runs-on—>self-hosted)
20.change(node-version—>18.x )(ci—>clean install)
21.remove command after(npm ci)
22. Add this code belove nam ci[21.41]
      -run: |
            touch .env
            echo "{{ secrets.PROUD_FILE }}" > .env 
23.commit changes
24.go to (action—>click on lml file)it has triggered workflow
25. Go to ec2—>ls—>cd action runners—>cd _work—>there u will hv project with same as GitHub repo name
26. execute ls -la to see hidden files like env[25.10]
27.  Execute sudo apt update
28. Install node js also
29. sudo apt-get install -y nodes
29. sudo apt-get install npm
30. Node -v
31.  npm -v
32. sudo apt-get install -y nginx
33. sudo npm i -g pm2
34.  Now configure nginx
35.  cd /etc/nginx/sites-available
36. ls
37. There willl be default file
38.  sudo nano default
39. Add configuration for backend code[28.52]
40. control+x to save
41. Execute sudo systemctl restart nginx
42.  cd to repo[31.29]
43. pm2 start index.js  —name=BackendAPI
44. Then again go to lml file and add command to restart backend
     -run pm2 restart BackendAPI
45.commit the yml file