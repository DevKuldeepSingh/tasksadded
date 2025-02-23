package com.isports.maxxx;
// IncomingCallModule.java

import android.content.Intent;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.isports.maxxx.IncomingCallActivity;

public class IncomingCallModule extends ReactContextBaseJavaModule {

    public IncomingCallModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "IncomingCallModule";
    }

    @ReactMethod
    public void startIncomingCallActivity() {
        Intent intent = new Intent(getCurrentActivity(), IncomingCallActivity.class);
        getCurrentActivity().startActivity(intent);
    }
}
