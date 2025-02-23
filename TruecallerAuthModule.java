package com.janganapp;

import android.app.Activity;
import android.widget.Toast;
import android.util.Log;
import android.graphics.Color;
import androidx.annotation.NonNull;

import androidx.annotation.Nullable;
import androidx.fragment.app.FragmentActivity;
import com.facebook.react.bridge.UiThreadUtil;
import android.content.Intent;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.truecaller.android.sdk.ITrueCallback;
import com.truecaller.android.sdk.TrueError;
import com.truecaller.android.sdk.TrueException;
import com.truecaller.android.sdk.TrueProfile;
import com.truecaller.android.sdk.TruecallerSDK;
import com.truecaller.android.sdk.TruecallerSdkScope;
import com.truecaller.android.sdk.clients.VerificationCallback;
import com.truecaller.android.sdk.clients.VerificationDataBundle;
import static com.truecaller.android.sdk.clients.VerificationDataBundle.KEY_OTP;

public class TruecallerAuthModule extends ReactContextBaseJavaModule {

private Promise promise = null;
private String phoneNumber = "";
private Boolean isTrueCallerInstalled = false;
private final ITrueCallback sdkCallback = new ITrueCallback() {
  @Override
  public void onSuccessProfileShared(@NonNull final TrueProfile trueProfile) {

if (promise != null) {
    WritableMap map = Arguments.createMap();
    map.putBoolean("successful", true);
    map.putString("firstName", trueProfile.firstName);
    map.putString("lastName", trueProfile.lastName);
    map.putString("phoneNumber", trueProfile.phoneNumber);
    map.putString("gender", trueProfile.gender);
    map.putString("street", trueProfile.street);
    map.putString("city", trueProfile.city);
    map.putString("zipcode", trueProfile.zipcode);
    map.putString("countryCode", trueProfile.countryCode);
    map.putString("facebookId", trueProfile.facebookId);
    map.putString("twitterId", trueProfile.twitterId);
    map.putString("email", trueProfile.email);
    map.putString("url", trueProfile.url);
    map.putString("avatarUrl", trueProfile.avatarUrl);
    map.putBoolean("isVerified", trueProfile.isTrueName);
    map.putBoolean("isAmbassador", trueProfile.isAmbassador);
    map.putString("companyName", trueProfile.companyName);
    map.putString("jobTitle", trueProfile.jobTitle);
    map.putString("payload", trueProfile.payload);
    map.putString("signature", trueProfile.signature);
    map.putString("signatureAlgorithm", trueProfile.signatureAlgorithm);
    map.putString("requestNonce", trueProfile.requestNonce);
    map.putBoolean("isBusiness",trueProfile.isBusiness);
    promise.resolve(map);
      }
}
@Override
public void onFailureProfileShared(@NonNull final TrueError trueError) {
  Log.d("TruecallerAuthModule", Integer.toString(trueError.getErrorType()));
  if (promise != null) {
    String errorReason = null;
    switch (trueError.getErrorType()) {
      case TrueError.ERROR_TYPE_INTERNAL:
        errorReason = "ERROR_TYPE_INTERNAL";
        break;
      case TrueError.ERROR_TYPE_NETWORK:
        errorReason = "ERROR_TYPE_NETWORK";
        break;
      case TrueError.ERROR_TYPE_USER_DENIED:
        errorReason = "ERROR_TYPE_USER_DENIED";
        break;
      case TrueError.ERROR_PROFILE_NOT_FOUND:
        errorReason = "ERROR_TYPE_UNAUTHORIZED_PARTNER";
        break;
      case TrueError.ERROR_TYPE_UNAUTHORIZED_USER:
        errorReason = "ERROR_TYPE_UNAUTHORIZED_USER";
        break;
      case TrueError.ERROR_TYPE_TRUECALLER_CLOSED_UNEXPECTEDLY:
        errorReason = "ERROR_TYPE_TRUECALLER_CLOSED_UNEXPECTEDLY";
        break;
      case TrueError.ERROR_TYPE_TRUESDK_TOO_OLD:
        errorReason = "ERROR_TYPE_TRUESDK_TOO_OLD";
        break;
      case TrueError.ERROR_TYPE_POSSIBLE_REQ_CODE_COLLISION:
        errorReason = "ERROR_TYPE_POSSIBLE_REQ_CODE_COLLISION";
        break;
      case TrueError.ERROR_TYPE_RESPONSE_SIGNATURE_MISMATCH:
        errorReason = "ERROR_TYPE_RESPONSE_SIGNATURE_MISSMATCH";
        break;
      case TrueError.ERROR_TYPE_REQUEST_NONCE_MISMATCH:
        errorReason = "ERROR_TYPE_REQUEST_NONCE_MISSMATCH";
        break;
      case TrueError.ERROR_TYPE_INVALID_ACCOUNT_STATE:
        errorReason = "ERROR_TYPE_INVALID_ACCOUNT_STATE";
        break;
      case TrueError.ERROR_TYPE_TC_NOT_INSTALLED:
        errorReason = "ERROR_TYPE_TC_NOT_INSTALLED";
        break;
      case TrueError.ERROR_TYPE_ACTIVITY_NOT_FOUND:
        errorReason = "ERROR_TYPE_ACTIVITY_NOT_FOUND";
        break;
    }
    WritableMap map = Arguments.createMap();
    map.putString("error", errorReason != null ? errorReason : "ERROR_TYPE_NULL");
    promise.resolve(map);
  }
}
@Override
public void onVerificationRequired(TrueError trueError) {
//The statement below can be ignored incase of one-tap flow integration
  TruecallerSDK.getInstance().requestVerification("IN", "PHONE-NUMBER-STRING", apiCallback,(FragmentActivity) getCurrentActivity());
  }
};


//Callback below can be ignored incase of one-tap only integration 

final VerificationCallback apiCallback = new VerificationCallback() {

        @Override
        public void onRequestSuccess(int requestCode, @Nullable VerificationDataBundle extras) {
            if (requestCode == VerificationCallback.TYPE_MISSED_CALL_INITIATED) {
                //  WritableMap map =  Arguments.createMap() ;
                // callInitiatedEvent(getReactApplicationContext(), map );
                // Toast.makeText(getReactApplicationContext(), "MISSED CALL INITIATED ", Toast.LENGTH_LONG).show();
//Retrieving the TTL for missedcall
                if (extras != null) {
                    extras.getString(VerificationDataBundle.KEY_TTL);
                }
            }
            if (requestCode == VerificationCallback.TYPE_MISSED_CALL_RECEIVED) {
                WritableMap map =  Arguments.createMap() ;
                sendVerifiedEvent(getReactApplicationContext(), map );
                TrueProfile profile = new TrueProfile.Builder("USER-FIRST-NAME", "USER-LAST-NAME").build();
                TruecallerSDK.getInstance().verifyMissedCall(profile, apiCallback);
            }
            if (requestCode == VerificationCallback.TYPE_OTP_INITIATED) {
                String ttl = extras.getString(VerificationDataBundle.KEY_TTL);

//Retrieving the TTL for otp
                if (extras != null) {
                    extras.getString(VerificationDataBundle.KEY_TTL);
                    Toast.makeText(getReactApplicationContext(),
                            "Missed call initiated with TTL : " + ttl,
                            Toast.LENGTH_SHORT).show();
                }
            }
            if (requestCode == VerificationCallback.TYPE_OTP_RECEIVED) {
                TrueProfile profile = new TrueProfile.Builder("USER-FIRST-NAME", "USER-LAST-NAME").build();
                TruecallerSDK.getInstance().verifyOtp(profile, "OTP-ENTERED-BY-THE-USER", apiCallback);
            }
            if (requestCode == VerificationCallback.TYPE_VERIFICATION_COMPLETE) {
                // Toast.makeText(getReactApplicationContext(), "VERIFICATION COMPLETE", Toast.LENGTH_LONG).show();
                WritableMap map =  Arguments.createMap() ;
                sendVerifiedEvent(getReactApplicationContext(), map );
            }
            if (requestCode == VerificationCallback.TYPE_PROFILE_VERIFIED_BEFORE) {
                // Toast.makeText(getReactApplicationContext(), "VERIFICATION BEFORE", Toast.LENGTH_LONG).show();
                WritableMap map =  Arguments.createMap() ;
                sendAlreadyVerifiedEvent(getReactApplicationContext(), map );
            }
            if(requestCode==6){
                WritableMap map =  Arguments.createMap() ;
                sendVerifiedEvent(getReactApplicationContext(), map );
            }
        }

        @Override
        public void onRequestFailure(final int requestCode, @NonNull final TrueException e) {
            //Write the Exception Part
            // Toast.makeText(getReactApplicationContext(), "FAILURE "+ requestCode, Toast.LENGTH_LONG).show();
            WritableMap map =  Arguments.createMap() ;
            sendFailedToVerifyEvent(getReactApplicationContext(), map );

        }
    };

     private void sendVerifiedEvent(ReactContext reactContext, @Nullable WritableMap params) {
        try{
            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("Verified", params);
        } catch (Exception e){
            // Toast.makeText(getReactApplicationContext(), "Failed SEND VERIFY EVENT :  "+e, Toast.LENGTH_LONG).show();
        }
    };

    private void sendAlreadyVerifiedEvent(ReactContext reactContext, @Nullable WritableMap params) {
        try{
            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("AlreadyVerified", params);
        } catch (Exception e){
            // Toast.makeText(getReactApplicationContext(), "Failed SEND ALREADY VERIFY EVENT :  "+e, Toast.LENGTH_LONG).show();
        }
    };

    private void sendFailedToVerifyEvent(ReactContext reactContext, @Nullable WritableMap params) {
        try{
            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("FailedToVerify", params);
        } catch (Exception e){
            // Toast.makeText(getReactApplicationContext(), "Failed TO VERIFY EVENT :  "+e, Toast.LENGTH_LONG).show();
        }
    }

    private void callInitiatedEvent(ReactContext reactContext, @Nullable WritableMap params) {
        try{
            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("CallInitiated", params);
        } catch (Exception e){
            // Toast.makeText(getReactApplicationContext(), "CALL INITIATED EVENT :  "+e, Toast.LENGTH_LONG).show();
        }
    }
    private void callRecievedEvent(ReactContext reactContext, @Nullable WritableMap params) {
        try{
            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("CallReceived", params);
        } catch (Exception e){
            // Toast.makeText(getReactApplicationContext(), "Call Received EVENT :  "+e, Toast.LENGTH_LONG).show();
        }
    };


TruecallerAuthModule(ReactApplicationContext reactContext) {
   super(reactContext);

  TruecallerSdkScope trueScope = new TruecallerSdkScope.Builder(reactContext, sdkCallback)
     .consentMode(TruecallerSdkScope.CONSENT_MODE_BOTTOMSHEET)
    .buttonColor(Color.parseColor("#0088FF"))
    .buttonTextColor(Color.WHITE)
    .loginTextPrefix(TruecallerSdkScope.LOGIN_TEXT_PREFIX_TO_GET_STARTED)
    .loginTextSuffix(TruecallerSdkScope.LOGIN_TEXT_SUFFIX_PLEASE_VERIFY_MOBILE_NO)
    .ctaTextPrefix(TruecallerSdkScope.CTA_TEXT_PREFIX_CONTINUE_WITH)
    .buttonShapeOptions(TruecallerSdkScope.BUTTON_SHAPE_ROUNDED)
    .privacyPolicyUrl("https://www.jangan.app/privacy-policy")
    .termsOfServiceUrl("https://www.jangan.app/terms-and-conditions")
    .footerType(TruecallerSdkScope.FOOTER_TYPE_ANOTHER_METHOD)
    .consentTitleOption(TruecallerSdkScope.SDK_CONSENT_TITLE_LOG_IN)
    .sdkOptions(  TruecallerSdkScope.SDK_OPTION_WITHOUT_OTP )
    .build();
  TruecallerSDK.init(trueScope);

      if( TruecallerSDK.getInstance().isUsable() ){
        isTrueCallerInstalled = true;
    }else{
        isTrueCallerInstalled = false; 
        TruecallerSDK.clear();
   TruecallerSdkScope trueScopeNotInstalled = new TruecallerSdkScope.Builder(reactContext, sdkCallback)
     .consentMode(TruecallerSdkScope.CONSENT_MODE_BOTTOMSHEET)
    .buttonColor(Color.parseColor("#0088FF"))
    .buttonTextColor(Color.WHITE)
    .loginTextPrefix(TruecallerSdkScope.LOGIN_TEXT_PREFIX_TO_GET_STARTED)
    .loginTextSuffix(TruecallerSdkScope.LOGIN_TEXT_SUFFIX_PLEASE_VERIFY_MOBILE_NO)
    .ctaTextPrefix(TruecallerSdkScope.CTA_TEXT_PREFIX_CONTINUE_WITH)
    .buttonShapeOptions(TruecallerSdkScope.BUTTON_SHAPE_ROUNDED)
    .privacyPolicyUrl("https://www.jangan.app/privacy-policy")
    .termsOfServiceUrl("https://www.jangan.app/terms-and-conditions")
    .footerType(TruecallerSdkScope.FOOTER_TYPE_ANOTHER_METHOD)
    .consentTitleOption(TruecallerSdkScope.SDK_CONSENT_TITLE_LOG_IN)
    .sdkOptions(TruecallerSdkScope.SDK_OPTION_WITH_OTP)
    .build();
    TruecallerSDK.init(trueScopeNotInstalled);
    }
 reactContext.addActivityEventListener(mActivityEventListener);  
}

@Override
public String getName() {
    return "TruecallerAuthModule";
}

@ReactMethod
public void showToast(Promise promise) {
    //  Toast.makeText(getReactApplicationContext(), "hello", Toast.LENGTH_LONG).show();
     promise.resolve(null);
}
@ReactMethod
    public void checkTruecallerIsInstalled(Callback callback) {
        // boolean isInstalled = TruecallerSDK.getInstance().isUsable();
        boolean isInstalled = isTrueCallerInstalled;
        callback.invoke(isInstalled);
    }

 @ReactMethod
 public void setPhoneNumber( String phone ){
     phoneNumber = phone;
 };


@ReactMethod
public void authenticate(Promise promise) {
    try {
         this.promise = promise;
           if (TruecallerSDK.getInstance() != null) {
                if(TruecallerSDK.getInstance().isUsable()){
                TruecallerSDK.getInstance().getUserProfile((FragmentActivity) getCurrentActivity());
                }
  //For One-Tap implementation : The isUsable method would return true incase where the truecaller app is installed and logged in else it will return false. 
  //For Full-Stack implementation : The isUsable method would always return true as now the SDK can be used to verify both truecaller and non-truecaller users
                
           } else {
                  WritableMap map = Arguments.createMap();
                  map.putString("error", "ERROR_TYPE_NOT_SUPPORTED");
                  this.promise.resolve(map);
          }
      } catch (Exception e) {
              this.promise.reject(e);
           }
};

 @ReactMethod
    public void authenticateViaCall(Promise promise) {
        try {
                 WritableMap map =  Arguments.createMap() ;
                callInitiatedEvent(getReactApplicationContext(), map );
            // Toast.makeText(getReactApplicationContext(), "AUTHENTICATION CALLED "+TruecallerSDK.getInstance().isUsable()+phoneNumber, Toast.LENGTH_LONG).show();

            this.promise = promise;
            if (TruecallerSDK.getInstance() != null) {
                if (TruecallerSDK.getInstance().isUsable()) {
                    UiThreadUtil.runOnUiThread(new Runnable()
                    {
                        @Override public void run()
                        {
                            TruecallerSDK.getInstance().requestVerification("IN", phoneNumber, apiCallback, (FragmentActivity) getCurrentActivity());
                        }
                    });
                }else{
                    //    TruecallerSDK.getInstance().getUserProfile((FragmentActivity) getCurrentActivity());
                    UiThreadUtil.runOnUiThread(new Runnable()
                    {
                        @Override public void run()
                        {
                            TruecallerSDK.getInstance().getUserProfile((FragmentActivity) getCurrentActivity());
                        }
                    });
                    // Toast.makeText(getReactApplicationContext(), "INSTANCE GOT BUT IS USABLE FALSE", Toast.LENGTH_LONG).show();
                }
                //For One-Tap implementation : The isUsable method would return true incase where the truecaller app is installed and logged in else it will return false.
                //For Full-Stack implementation : The isUsable method would always return true as now the SDK can be used to verify both truecaller and non-truecaller users

            } else {
                if (TruecallerSDK.getInstance().isUsable()) {
                    // Toast.makeText(getReactApplicationContext(), "IS USEABLE TRUE ", Toast.LENGTH_LONG).show();
                } else{
                    // Toast.makeText(getReactApplicationContext(), "is useable false ", Toast.LENGTH_LONG).show();
                }
                WritableMap mapC = Arguments.createMap();
                mapC.putString("error", "ERROR_TYPE_NOT_SUPPORTED");
                this.promise.resolve(mapC);
            }
        } catch (Exception e) {
            // Toast.makeText(getReactApplicationContext(), "exception  "+e, Toast.LENGTH_LONG).show();
            this.promise.reject(e);
        }
    }

       
  @ReactMethod 
  public void SDKClear(){
  TruecallerSDK.clear();
  }

 private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {
    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent intent) {
        super.onActivityResult(activity, requestCode, resultCode, intent);
    
    if (requestCode == TruecallerSDK.SHARE_PROFILE_REQUEST_CODE) {
         TruecallerSDK.getInstance().onActivityResultObtained((FragmentActivity)activity, requestCode, resultCode, intent);
        }
      }
    };   
  }