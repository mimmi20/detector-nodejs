jQuery('span[data-capability]').each(function() {
  var data = this.dataset.capability,
    featureNameSplit = data.split('.'),
    t = typeof result[data];

  if (!result.hasOwnProperty(data) || t === 'undefined') {
    jQuery(this).addClass('label label-pill label-info support').html('undefined');

    return;
  }

  if (t === 'boolean') {
    if (result[data]) {
      jQuery(this).addClass('label label-pill label-success support').html('true');
    } else {
      jQuery(this).addClass('label label-pill label-danger support').html('false');
    }

    return;
  }

  if (result[data] === 't' || result[data] === true) {
    jQuery(this).addClass('label label-pill label-success support').html('true');

    return;
  } else if (result[data] === 'f' || result[data] === false) {
    jQuery(this).addClass('label label-pill label-danger support').html('false');

    return;
  } else if (result[data] === 'n' || result[data] === null) {
    jQuery(this).addClass('label label-pill label-warning support').html('null');

    return;
  } else if (result[data] === 'e' || result[data] === '') {
    jQuery(this).addClass('label label-pill label-danger support').html('false');

    return;
  } else if (result[data] === 'p' || result[data] === 'probably') {
    jQuery(this).addClass('label label-pill label-warning support').html('probably');

    return;
  } else if (result[data] === 'm' || result[data] === 'maybe') {
    jQuery(this).addClass('label label-pill label-warning support').html('maybe');

    return;
  } else if (result[data] === 'u') {
    jQuery(this).addClass('label label-pill label-danger support').html('n/a');

    return;
  } else {
    jQuery(this).addClass('label label-pill label-info support').html(result[data]);

    return;
  }

  if (typeof result[data] !== 'undefined') {
    switch (result[data]) {
      case 't':
        jQuery(this).addClass('label label-pill label-success support').html('true');
        break;
      case 'f':
        jQuery(this).addClass('label label-pill label-danger support').html('false');
        break;
      case 'p':
        jQuery(this).addClass('label label-pill label-warning support').html('probably');
        break;
      case 'm':
        jQuery(this).addClass('label label-pill label-warning support').html('maybe');
        break;
      case 'u':
        jQuery(this).addClass('label label-pill label-info support').html('undefined');
        break;
      default:
        jQuery(this).addClass('label label-pill label-info support').html(result[data]);
    }
  }
});