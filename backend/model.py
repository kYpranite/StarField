import json

import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error


with open("../scraper/first_half.json", "r") as file:
    data = json.loads(file.read())
with open("../scraper/second_half.json", "r") as file:
    data2 = json.loads(file.read())
data.update(data2)


# Prepare the data
X = np.column_stack((light_pollution, cloud_coverage))
y = seeing_accuracy
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Instantiate and train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions on the testing data
y_pred = model.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
print("Mean Squared Error:", mse)



# import json
# from sklearn.model_selection import train_test_split
# from sklearn.linear_model import LinearRegression
# from sklearn.metrics import mean_squared_error

# # Step 1: Load the JSON data
# with open('your_dataset.json', 'r') as file:
#     data = json.load(file)

# # Step 2: Preprocess the data
# X = [[example['light_pollution'], example['cloud_coverage']] for example in data['data']]
# y = [example['seeing_accuracy'] for example in data['data']]

# # Step 3: Split the dataset into training and testing sets
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# # Step 4: Instantiate the linear regression model
# model = LinearRegression()

# # Step 5: Train the model
# model.fit(X_train, y_train)

# # Step 6: Evaluate the model
# y_pred = model.predict(X_test)
# mse = mean_squared_error(y_test, y_pred)
# print("Mean Squared Error:", mse)