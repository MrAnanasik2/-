document.addEventListener('DOMContentLoaded', () => {
  const texts = document.querySelectorAll('.text');

  // ---- шрифт ----
  const fontSel = document.querySelector('.settings__form select');
  fontSel.addEventListener('change', () => {
      const map = {
          'StratosSkyeng': "'StratosSkyeng'",
          'Verdana':       "'Verdana'",
          'OpenSans':      "'Open Sans'",
      };
      const fam = map[fontSel.value] || "'Verdana'";
      texts.forEach(t => t.style.fontFamily = fam + ', sans-serif');
      console.log('font ->', fam); // проверь в консоли
  });

  // ---- размер ----
  const sizeInput = document.getElementById('fontSize');
  sizeInput.addEventListener('input', () => {
      texts.forEach(t => t.style.fontSize = sizeInput.value + 'px');
      console.log('size ->', sizeInput.value);
  });

  // ---- цвет текста ----
  const colorInput = document.querySelector('input[type="color"].settings__font-color');
  colorInput.addEventListener('input', () => {
      texts.forEach(t => t.style.color = colorInput.value);
      console.log('color ->', colorInput.value);
  });

  // ---- интервал ----
  const rangeInput = document.querySelector('.settings__form input[type="range"]');
  rangeInput.addEventListener('input', () => {
      texts.forEach(t => t.style.lineHeight = (rangeInput.value / 100));
      console.log('line-height ->', rangeInput.value / 100);
  });

  // ---- фон ----
  const radios = document.querySelectorAll('.settings__form input[type="radio"][name="font-color"]');
  const bgMap = { white: '#ffffff', bisque: 'bisque', grey: 'grey', black: '#000000' };
  radios.forEach(r => {
      r.addEventListener('change', () => {
          if (!r.checked) return;
          const cls = [...r.parentElement.classList].find(c => bgMap[c]);
          document.body.style.backgroundColor = bgMap[cls] || '#fff';
          console.log('bg ->', cls);
      });
  });

  // ---- закрыть панель ----
  document.querySelector('.settings__close').addEventListener('click', () => {
      document.querySelector('.content__settings').style.display = 'none';
  });
});