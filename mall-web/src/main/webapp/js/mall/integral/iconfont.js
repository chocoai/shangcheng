;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gou" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M834.9531 280.9195 419.218 728.617 195.3606 440.8111 277.3084 370.8586 419.218 518.7593 770.9939 216.9629Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-optionbutton" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 85.333333c-235.642667 0-426.666667 191.026667-426.666667 426.666667s191.024 426.666667 426.666667 426.666667c235.64 0 426.666667-191.026667 426.666667-426.666667S747.64 85.333333 512 85.333333zM512 896c-212.08 0-384-171.925333-384-384 0-212.077333 171.92-384 384-384 212.074667 0 384 171.922667 384 384C896 724.074667 724.074667 896 512 896z"  ></path>' +
    '' +
    '<path d="M512 512m-234.666667 0a88 88 0 1 0 469.333333 0 88 88 0 1 0-469.333333 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-close" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M934.600901 934.766676c-33.225729 33.226752-87.612407 33.226752-120.750131 0L511.817851 632.699989 209.825866 934.766676c-33.226752 33.226752-87.531566 33.226752-120.758318 0-33.226752-33.226752-33.226752-87.612407 0-120.839159l302.014498-301.977659L89.066525 209.901591c-33.307593-33.056883-33.307593-87.441515 0-120.66929 33.226752-33.226752 87.531566-33.226752 120.758318 0l301.993009 301.996079L813.851792 89.232301c33.137725-33.226752 87.524402-33.226752 120.750131 0 33.137725 33.226752 33.137725 87.612407-0.089028 120.66929L632.538307 511.949858l301.973566 301.977659C967.738625 847.155293 967.828676 901.539924 934.600901 934.766676z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M723.696401 533.102744c0.486519-0.973037 1.337926-1.824445 1.702815-2.797482 8.514075-17.757928 5.716593-39.651265-9.365483-53.881934L372.30835 151.307281c-18.730966-17.757928-48.28697-16.906521-66.044898 1.824445-17.757928 18.730966-16.906521 48.28697 1.824445 66.044898l308.452785 291.789524L309.304193 807.012709c-18.609336 17.879558-19.095855 47.435562-1.216296 66.044898 9.122224 9.487112 21.406818 14.352298 33.569783 14.352298 11.676446 0 23.352892-4.378667 32.353486-13.136002l340.563012-328.278418c0.608148-0.608148 0.851408-1.581185 1.581185-2.189334 0.486519-0.486519 0.973037-0.851408 1.581185-1.337926C720.53403 539.670745 721.871956 536.265115 723.696401 533.102744L723.696401 533.102744zM723.696401 533.102744"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gou1" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M511.974401 0c-282.75527 0-511.974401 229.219131-511.974401 511.974401 0 282.757318 229.219131 511.974401 511.974401 511.974401 282.757318 0 511.974401-229.217083 511.974401-511.974401C1023.948803 229.219131 794.729672 0 511.974401 0zM805.63063 379.174385 474.510162 710.296901c0 0-0.004096 0.004096-0.010239 0.010239-15.265029 15.269125-38.541433 17.652877-56.31104 7.157402-3.290971-1.945503-6.393536-4.333351-9.219635-7.157402-0.002048-0.004096-0.006144-0.006144-0.006144-0.006144l-190.642884-190.642884c-18.095223-18.095223-18.095223-47.4375 0-65.536819 18.095223-18.095223 47.4375-18.095223 65.532723 0l157.884714 157.884714 298.362298-298.362298c18.097271-18.095223 47.439548-18.095223 65.534771 0C823.725854 331.738933 823.725854 361.079162 805.63063 379.174385z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-103" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C230.4 0 0 230.4 0 512c0 281.6 230.4 512 512 512 281.6 0 512-230.4 512-512C1024 230.4 793.6 0 512 0zM499.2 780.8c-25.6 25.6-70.4 25.6-96 0L179.2 563.2c-25.6-25.6-25.6-70.4 0-96 25.6-25.6 70.4-25.6 96 0L448 633.6l332.8-326.4c25.6-25.6 70.4-25.6 96 0 25.6 25.6 25.6 70.4 0 96L499.2 780.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M337.301677 512.002047c0 22.865777 4.547573 45.724391 13.296841 66.853617 8.751315 21.126156 21.702278 40.506553 37.871539 56.675814 16.171308 16.171308 35.548634 29.118178 56.673767 37.870516 21.128203 8.750291 43.988864 13.296841 66.858734 13.296841 22.865777 0 45.724391-4.546549 66.852594-13.296841 21.126156-8.752338 40.507576-21.699208 56.675814-37.870516 16.172331-16.169261 29.119201-35.549657 37.871539-56.675814 8.749268-21.129226 13.298887-43.98784 13.298887-66.853617 0-22.868847-4.549619-45.727461-13.298887-66.85771-8.752338-21.125133-21.699208-40.503483-37.871539-56.67479-16.168238-16.168238-35.549657-29.119201-56.675814-37.868469-21.128203-8.751315-43.986817-13.297864-66.852594-13.297864-22.86987 0-45.729507 4.546549-66.858734 13.297864-21.126156 8.750291-40.503483 21.701255-56.673767 37.868469-16.169261 16.172331-29.120224 35.550681-37.871539 56.67479C341.848227 466.274586 337.301677 489.1332 337.301677 512.002047L337.301677 512.002047zM337.301677 512.002047"  ></path>' +
    '' +
    '<path d="M512.002558 201.426569c170.815387 0 310.575478 139.757021 310.575478 310.575478 0 170.815387-139.760091 310.576501-310.575478 310.576501-170.820504 0-310.576501-139.761114-310.576501-310.576501C201.425034 341.182566 341.182055 201.426569 512.002558 201.426569M512.002558 123.780141c-213.524095 0-388.222929 174.699857-388.222929 388.221906 0 213.517955 174.698834 388.217812 388.222929 388.217812 213.517955 0 388.217812-174.699857 388.217812-388.217812C900.220371 298.479999 725.520513 123.780141 512.002558 123.780141L512.002558 123.780141 512.002558 123.780141zM512.002558 123.780141"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cha" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.705799 64.021106c-247.270686 0-447.724091 200.453405-447.724091 447.724091s200.453405 447.724091 447.724091 447.724091c247.27171 0 447.724091-200.453405 447.724091-447.724091S758.976486 64.021106 511.705799 64.021106zM737.334583 694.983521c12.432147 12.547781 12.33698 32.79594-0.210801 45.226041-12.547781 12.429077-32.79594 12.335956-45.228087-0.211824l-179.692568-181.38614-181.747367 180.050726c-12.547781 12.429077-32.79594 12.334933-45.226041-0.212848-12.429077-12.547781-12.334933-32.794917 0.211824-45.226041l181.747367-180.051749L286.766724 331.049788c-12.429077-12.546757-12.334933-32.79594 0.212848-45.226041s32.794917-12.334933 45.225017 0.212848l180.422186 182.121897 181.76067-180.065052c12.549827-12.429077 32.796964-12.334933 45.227064 0.212848 12.4301 12.546757 12.334933 32.79594-0.211824 45.226041L557.640991 513.597381 737.334583 694.983521z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zanting" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zM454.4 723.2c0 19.2-19.2 32-44.8 32-25.6 0-44.8-12.8-44.8-32L364.8 300.8c0-19.2 19.2-32 44.8-32 25.6 0 44.8 12.8 44.8 32L454.4 723.2zM665.6 723.2c0 19.2-19.2 32-44.8 32-25.6 0-44.8-12.8-44.8-32L576 300.8c0-19.2 19.2-32 44.8-32 25.6 0 44.8 12.8 44.8 32L665.6 723.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gantanhao11-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 1024C229.239467 1024 0 794.760533 0 512 0 229.239467 229.239467 0 512 0 794.760533 0 1024 229.239467 1024 512 1024 794.760533 794.760533 1024 512 1024ZM512 68.266667C266.922667 68.266667 68.266667 266.922667 68.266667 512 68.266667 757.077333 266.922667 955.733333 512 955.733333 757.077333 955.733333 955.733333 757.077333 955.733333 512 955.733333 266.922667 757.077333 68.266667 512 68.266667ZM512 819.2C474.282667 819.2 443.733333 788.650667 443.733333 750.933333 443.733333 713.216 474.282667 682.666667 512 682.666667 549.717333 682.666667 580.266667 713.216 580.266667 750.933333 580.266667 788.650667 549.717333 819.2 512 819.2ZM512 614.4C493.1584 614.4 477.866667 583.850667 477.866667 546.133333 477.866667 546.133333 443.733333 238.933333 443.733333 238.933333 443.733333 201.216 474.282667 170.666667 512 170.666667 549.717333 170.666667 580.266667 201.216 580.266667 238.933333 580.266667 238.933333 546.133333 546.133333 546.133333 546.133333 546.133333 583.850667 530.8416 614.4 512 614.4Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-selected" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M0 128c0-70.4 57.6-128 128-128l768 0c70.4 0 128 57.6 128 128l0 768c0 70.4-57.6 128-128 128L128 1024c-70.4 0-128-57.6-128-128L0 128zM454.4 652.8 448 646.4 249.6 441.6c-12.8-12.8-32-12.8-44.8 0C192 454.4 192 473.6 198.4 486.4l230.4 230.4c12.8 12.8 32 12.8 44.8 0L492.8 704c128-128 390.4-390.4 390.4-390.4 12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L454.4 652.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-duigou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.380388 63.974034c-247.396553 0-447.952288 200.554712-447.952288 447.952288s200.555735 447.952288 447.952288 447.952288c247.397576 0 447.952288-200.554712 447.952288-447.952288S758.777965 63.974034 511.380388 63.974034zM760.632195 388.56983l-294.925033 294.927079c-6.656607 6.655584-15.382339 9.984399-24.107047 9.984399s-17.450441-3.328815-24.107047-9.984399L262.130627 528.132422c-13.316284-13.310144-13.316284-34.899858 0-48.210002 13.314237-13.31833 34.899858-13.31833 48.214095 0l131.255393 131.25437 270.816962-270.817985c13.31526-13.317307 34.899858-13.317307 48.215118 0C773.946432 353.668948 773.946432 375.259686 760.632195 388.56983z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pen" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M635.134 361.732l-259.507 259.528 19.593 17.159 257.092-259.528c-0.021 0-4.937-14.722-17.179-17.159z"  ></path>' +
    '' +
    '<path d="M509.352 51.282c-252.58 0-458.071 205.492-458.071 458.071s205.492 458.071 458.071 458.071 458.071-205.492 458.071-458.071-205.492-458.071-458.071-458.071zM434.069 720.244l-124.701 23.385 31.181-120.804 288.379-288.358c0 0 81.828 1.95 93.519 89.623l-288.379 296.153z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yixuanzekuang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.222 0 0 229.222 0 512s229.222 512 512 512 512-229.222 512-512S794.778 0 512 0z m0 972.8C257.485 972.8 51.2 766.515 51.2 512 51.2 257.485 257.485 51.2 512 51.2S972.8 257.485 972.8 512c0 254.515-206.285 460.8-460.8 460.8z" fill="#00B5F0" ></path>' +
    '' +
    '<path d="M256 512a5 5 0 1 0 512 0 5 5 0 1 0-512 0z" fill="#00B5F0" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-check" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M767.386162 102.398036H256.594195c-85.03378 0-154.215802 69.162379-154.215802 154.196159v510.791967c0 85.03378 69.162379 154.215802 154.215802 154.215802h510.791967c85.03378 0 154.215802-69.162379 154.215802-154.215802V256.594195c0-85.03378-69.182022-154.19616-154.215802-154.196159z m19.642823 284.663789L502.699123 671.372044c-10.01784 10.01784-21.273177 14.005333-32.194586 13.985689-0.62857 0.058928-1.237498 0.039286-1.885711 0.058929-0.62857-0.019643-1.237498 0-1.866069-0.058929-10.92141 0.019643-22.19639-3.96785-32.214229-13.985689l-175.07648-175.096124c-43.98028-43.999923 24.160672-112.121233 68.160595-68.160595l140.996183 141.015825 250.22992-250.22992c44.019566-43.98028 112.160519 24.160672 68.180239 68.160595z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)