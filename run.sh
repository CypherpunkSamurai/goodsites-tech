pip install -r requirements.txt
BASE_URL="http://www.goodsites.tech/"
waybackpy --known_urls --user_agent "my-unique-user-agent" --url "$BASE_URL" > urls.txt
mkdir -p files
cd files
cat ../urls.txt | xargs -I '{}' sh -c "wget 'https://web.archive.org/web/20211207175525/'{}"
find . -name "*.htm*" -print | xargs -I '{}' sh -c "sed -Ei 's/https\:\/\/web\.archive\.org\/web\/[0-9]+\///g' {}"