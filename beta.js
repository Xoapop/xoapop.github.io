var mirrors = "xoapop.github.io"
  
  async function try_mirror(mirror) {
    let r = await fetch(mirror + "/app/main.js");
    let script = await r.text();
    window.base_url = mirror;
    eval(script);
  }
  
  async function init() {
    if (window.location.hostname == "edpuzzle.hs.vc") {
      alert("To use this, drag this button into your bookmarks bar. Then, run it when you're on an Edpuzzle assignment.");
      return;
    }
    if (document.dev_env) {
      return try_mirror(document.dev_env)
    }
  
    for (let mirror of mirrors) {
      try {
        await try_mirror(mirror);
        return;
      }
      catch {}
    }
    
    alert("Error: Could not connect to any of the mirrors. Check that they're not blocked.")
  }
  
  init();
