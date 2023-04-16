import { ACCOUNT } from '../../source/utils/constants.js';

// (function ($) {
//   'use strict';

//   /*==================================================================
//         [ Focus input ]*/
//   $('.input100').each(function () {
//     $(this).on('blur', function () {
//       if ($(this).val().trim() != '') {
//         $(this).addClass('has-val');
//       } else {
//         $(this).removeClass('has-val');
//       }
//     });
//   });

//   /*==================================================================
//         [ Validate ]*/
//   var input = $('.validate-input .input100');

//   $('.validate-form').on('submit', function () {
//     var check = true;

//     for (var i = 0; i < input.length; i++) {
//       if (validate(input[i]) == false) {
//         showValidate(input[i]);
//         check = false;
//       }
//     }

//     return check;
//   });

//   $('.validate-form .input100').each(function () {
//     $(this).focus(function () {
//       hideValidate(this);
//     });
//   });

//   function validate(input) {
//     if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//       if (
//         $(input)
//           .val()
//           .trim()
//           .match(
//             /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
//           ) == null
//       ) {
//         return false;
//       }
//     } else {
//       if ($(input).val().trim() == '') {
//         return false;
//       }
//     }
//   }

//   function showValidate(input) {
//     var thisAlert = $(input).parent();

//     $(thisAlert).addClass('alert-validate');
//   }

//   function hideValidate(input) {
//     var thisAlert = $(input).parent();

//     $(thisAlert).removeClass('alert-validate');
//   }

//   /*==================================================================
//         [ Show pass ]*/
//   var showPass = 0;
//   $('.btn-show-pass').on('click', function () {
//     if (showPass == 0) {
//       $(this).next('input').attr('type', 'text');
//       $(this).find('i').removeClass('zmdi-eye');
//       $(this).find('i').addClass('zmdi-eye-off');
//       showPass = 1;
//     } else {
//       $(this).next('input').attr('type', 'password');
//       $(this).find('i').addClass('zmdi-eye');
//       $(this).find('i').removeClass('zmdi-eye-off');
//       showPass = 0;
//     }
//   });
// })(jQuery);

export const validateOTP = () => {
  console.log('OTP');
  return true;
};

export const isNormalUser = (username, pwd) => username === ACCOUNT.NORMAL.username && pwd === ACCOUNT.NORMAL.password;
export const isSubscriber = (username, pwd) =>
  username === ACCOUNT.SUBSCRIBER.username && pwd === ACCOUNT.SUBSCRIBER.password;
export const isWriter = (username, pwd) => username === ACCOUNT.WRITER.username && pwd === ACCOUNT.WRITER.password;
export const isEditor = (username, pwd) => username === ACCOUNT.EDITOR.username && pwd === ACCOUNT.EDITOR.password;
export const isAdmin = (username, pwd) => username === ACCOUNT.ADMIN.username && pwd === ACCOUNT.ADMIN.password;
