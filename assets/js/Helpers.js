class Helpers {

  constructor(){
    console.error("Static class, not a function.");
  }

  static createElement (tagName, attributes){

    try {

      let element = document.createElement(tagName);
      for (let name in attributes){
        var value = attributes[name];
        if(name === 'dataset'){
          for(let data in value){
            element.dataset[data] = value[data];
          }
          continue;
        }
        element[name] = value;
      }

      return element;

    } catch(e){
      console.error(e);
    }

  }

  static scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function () {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop == to) return;
        Helpers.scrollTo(element, to, duration - 10);
    }, 10);
  }

  static listen(selector, event, callback){

    document.querySelectorAll(selector).forEach(function(element) {
      element.addEventListener(event, ()=> {
        callback.apply(element, arguments);
      });
    });

  }

  static setFixed(element, base) {

    base.style.paddingTop = window.getComputedStyle(element).height;

    base.addEventListener('scroll', (event)=>{

      if(window.isMobile){
        element.style.top = '0px';
      } else {
        element.style.top = base.scrollTop + 'px';
      }

    });

  }

  static hasClass (field, className){
    return field.className.split(' ').indexOf(className) >= 0;
  }

  static addClass (field, className){
    !this.hasClass(...arguments) ? field.className += ` ${className}`: '';
  }

  static rmClass (field, className){
    this.hasClass(...arguments) ? field.className = field.className.split(' ').filter((cls)=> cls != className).join(' '): '';
  }

  static empty (text){
    return text.trim().length < 1;
  }

  static isCorrectName (name){
    return /^([a-zÃ¡Ã Ã¢Ã£Ã©Ã¨ÃªÃ­Ã¯Ã³Ã´ÃµÃ¶ÃºÃ§Ã±]{2,}\s[a-zÃ¡Ã Ã¢Ã£Ã©Ã¨ÃªÃ­Ã¯Ã³Ã´ÃµÃ¶ÃºÃ§Ã±\s]{2,})$/i.test(name);
  }

  static isEmail (email){
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  static formError(msg, field){
    this.addClass(field, 'invalid');
    field.msg = this.createElement('div', {innerHTML : msg, className: 'form-msg error'});
    field.parentElement.appendChild(field.msg);
    field.focus();
  }

  static formErrorClear(field){
    Helpers.rmClass(field, 'invalid');
    if(field.msg instanceof Node){
      field.msg.remove();
    }
    if(field.parentElement.msg instanceof Node){
      field.parentElement.msg.remove();
    }
  }

  static generateID(reference){
    return firebase.database().ref().child(reference).push().key;
  }

  static saveNews(perfil, name, email, empresa, cargo, functionarios){

    let updates = {};
    let b2c = {
      fullname: name,
      email: email
    }
    let b2b = {
      fullname: name,
      email: email,
      empresa: empresa,
      cargo: cargo,
      functionarios: functionarios
    }

    let lead;
    if(perfil == 'b2c') {
      lead = b2c
    } else {
      lead = b2b
    }
    updates[`/${perfil}/${this.generateID(perfil)}`] = {
      lead
    };

    return firebase.database().ref().update(updates);

  }

  static formMsg(msg, form){
    this.addClass(form, 'thank-you');
    form.msg = this.createElement('div', {innerHTML : msg, className: 'form-msg'});
    form.appendChild(form.msg);
    form.focus();
  }

}