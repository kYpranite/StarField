import json

import joblib
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score


with open("../scraper/first_half.json", "r") as file:
    data = json.loads(file.read())
with open("../scraper/second_half.json", "r") as file:
    data2 = json.loads(file.read())
data.update(data2)


def clean_cloud(value):
    if "Clear" in value or "égagé" in value or "Claro" in value:
        return 0
    if "Overcast" in value or "Couvert" in value or "Nublado" in value:
        return 10
    else:
        try:
            return int(value.split(": ")[-1].split("0%")[0])
        except:
            print(value)
            return 0


def clean_humidity(value):
    value = value.split(": ")[-1].split(" (")[0]
    if "<" in value:
        return 25
    elif " to " in value:
        two = value.replace("%","").split(" to ")
        return (int(two[0]) + int(two[1])) / 2
    
    print(value)
    return 0


def clean_wind(value):
    if ">" in value:
        return 72
    value = value.split(": ")[-1].split(" km/")[0]
    if " mph (" in value:
        value = value.split(" mph")[0]
        two = value.split(" to ")
        return (int(two[0]) + int(two[1])) / 2 * 1.60934
    if " to " in value:
        two = value.split(" to ")
        return (int(two[0]) + int(two[1])) / 2
    
    print(value)
    return 0


def clean_seeing(value):
    if "Too cloudy" in value or "Trop nua" in value or "Demasiado nublado" in value:
        return 0
    xxx = value.split("/5")[0].split(" ")[-1]
    if "(" in xxx:
        input(value)
    return xxx



def clean_temperature(value):
    while ": " in value:
        value = value.replace(": ",":")
    value = value.split(":")[-1].split(" (")[0]
    if " to " in value:
        two = value.replace("C", "").split(" to ")

        if "F" in two[0]:
            two[0] = (int(two[0].replace("F", "")) - 32) * 5/9
        if "F" in two[1]:
            two[1] = (int(two[1].replace("F", "")) - 32) * 5/9
        return (int(two[0]) + int(two[1])) / 2
    
    print(value)
    return 0


df = pd.DataFrame(data)
df = df.transpose()
df.drop(['Light Pollution', 'Smoke', 'Transparency'], axis=1, inplace=True)

reshaped_data = []
array_length = len(df.iloc[0, 0])
for index, row in df.iterrows():
    for i in range(array_length):
        new_row = {'Index': index}
        for col in df.columns:
            new_row[col] = row[col][i]
        reshaped_data.append(new_row)

df = pd.DataFrame(reshaped_data)

df['Cloud Cover'] = df['Cloud Cover'].apply(clean_cloud)
df['Humidity'] = df['Humidity'].apply(clean_humidity)
df['Seeing'] = df['Seeing'].apply(clean_seeing)
df['Wind'] = df['Wind'].apply(clean_wind)
df['Temperature'] = df['Temperature'].apply(clean_temperature)

print(df.head(10))

X = df[['Cloud Cover', 'Humidity', 'Wind', 'Temperature']]
y = df["Seeing"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)
model = LinearRegression()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print("Model Coefficients:", model.coef_)
print("Model Intercept:", model.intercept_)
print("Mean Squared Error:", mse)
print("R^2 Score:", r2)

joblib.dump(model, "model.joblib") 