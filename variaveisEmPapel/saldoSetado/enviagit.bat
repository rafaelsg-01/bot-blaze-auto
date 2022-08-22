sudo cd ./Example/variaveisEmPapel/saldoSetado/arquivo
sudo rm -rf .git
sudo git init
sudo git remote add origin https://rafaellojas2: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@github.com/rafaellojas2/saldosetado.git
sudo git checkout -b main
sudo git add saldosetado.txt
sudo git commit -m "versao 22.3.8"
sudo git status
sudo git push origin main --force