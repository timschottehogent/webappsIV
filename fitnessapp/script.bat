for i in `ls -d -A * | grep -v frontend`; 
do git mv $i frontend/; done 
git mv .angular-cli.json frontend/