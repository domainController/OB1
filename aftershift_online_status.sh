while true; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://aftershift.se)
  if [ "$STATUS" = "200" ]; then
    echo "✅ Site en ligne !"
    osascript -e 'display notification "Site AfterShift.se en ligne" with title "GitHub Pages"'
    break
  else
    echo "🕓 Pas encore dispo... (status $STATUS)"
  fi
  sleep 60
done