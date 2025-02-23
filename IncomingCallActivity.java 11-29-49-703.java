package com.isports.maxxx;
import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class IncomingCallActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.my_calling_layout);

        // Get references to UI elements
        TextView callerNameTextView = findViewById(R.id.callerNameTextView);
        Button acceptButton = findViewById(R.id.acceptButton);
        Button rejectButton = findViewById(R.id.rejectButton);

        // Retrieve caller information (you can pass it as an Intent extra)
        String callerName = "John Doe"; // Replace with actual caller info
        callerNameTextView.setText(callerName + " is calling...");

        // Set click listeners for the buttons
        acceptButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Handle call acceptance logic
            }
        });

        rejectButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Handle call rejection logic
            }
        });
    }
}

