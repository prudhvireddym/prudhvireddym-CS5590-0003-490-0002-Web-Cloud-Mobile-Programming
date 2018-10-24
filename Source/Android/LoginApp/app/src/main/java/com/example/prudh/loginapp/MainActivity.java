package com.example.prudh.loginapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    public EditText Username;
    public EditText pswd;
    public TextView status;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
         Username =(EditText) findViewById(R.id.editText);
         pswd = (EditText) findViewById(R.id.Password);
         status = (TextView)findViewById(R.id.textView);
    }

    public void login(View view)
    {
        if(Username.getText().toString().equals("admin")&&pswd.getText().toString().equals("admin")){
            Intent intent = new Intent(MainActivity.this, LoginActivity.class);
            startActivity(intent);
        }else {
            status.setText("Invalid Credentials");
        }

    }


}
