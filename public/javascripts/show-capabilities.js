jQuery('div[data-capability]').each(function() {
  var data = this.dataset.capability,
    featureNameSplit = data.split('.'),
    t = typeof result[data];

  if (!result.hasOwnProperty(data) || t === 'undefined') {
    jQuery(this).html('<span class="label label-info">undefined</span>');

    return;
  }

  if (t === 'boolean') {
    if (result[data]) {
      jQuery(this).html('<span class="label label-success">true</span>');
    } else {
      jQuery(this).html('<span class="label label-danger">false</span>');
    }

    return;
  }

  if (result[data] === 't' || result[data] === true) {
    jQuery(this).html('<span class="label label-success">true</span>');

    return;
  } else if (result[data] === 'f' || result[data] === false) {
    jQuery(this).html('<span class="label label-danger">false</span>');

    return;
  } else if (result[data] === 'n' || result[data] === null) {
    jQuery(this).html('<span class="label label-warning">null</span>');

    return;
  } else if (result[data] === 'e' || result[data] === '') {
    jQuery(this).html('<span class="label label-danger">false</span>');

    return;
  } else if (result[data] === 'p' || result[data] === 'probably') {
    jQuery(this).html('<span class="label label-warning">probably</span>');

    return;
  } else if (result[data] === 'm' || result[data] === 'maybe') {
    jQuery(this).html('<span class="label label-warning">maybe</span>');

    return;
  } else if (result[data] === 'u') {
    jQuery(this).html('<span class="label label-danger">false</span>');

    return;
  } else {
    jQuery(this).html('<span class="label label-info">' + result[data] + '</span>');

    return;
  }

  if (typeof result[data] !== 'undefined') {
    switch (result[data]) {
      case 't':
        jQuery(this).html('<span class="label label-success">true</span>');
        break;
      case 'f':
        jQuery(this).html('<span class="label label-danger">false</span>');
        break;
      case 'm':
        jQuery(this).html('<span class="label label-warning">probably</span>');
        break;
      case 'p':
        jQuery(this).html('<span class="label label-warning">maybe</span>');
        break;
      case 'u':
        jQuery(this).html('<span class="label label-info">undefined (u)</span>');
        break;
      default:
        jQuery(this).html('<span class="label label-info">' + result[data] + '</span>');
    }
  }
});