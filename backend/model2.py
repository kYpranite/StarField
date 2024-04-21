import json
import pandas as pd

import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

with open("../scraper/first_half.json", "r") as file:
    data1 = json.loads(file.read())
with open("../scraper/second_half.json", "r") as file:
    data2 = json.loads(file.read())

df1 = pd.DataFrame(data1)
df2 = pd.DataFrame(data2)

combined_df = pd.concat([df1, df2], ignore_index=True)

X = combined_df.drop(columns=['target_column'])  
y = combined_df['target_column']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

mse = mean_squared_error(y_test, y_pred)
print("Mean Squared Error:", mse) 