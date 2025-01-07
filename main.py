import pandas as pd

import matplotlib.pyplot as plt

import matplotlib.gridspec as grid

data = pd.read_csv('data.csv')

female = 0

male = 0

for setval in data['Sex']:
    if setval == 'FEMALE':
        female += 1
    else:
        male += 1

print('Female: ', female)
print('Male: ', male)

gs = grid.GridSpec(1, 2)

ax = plt.subplot(gs[0])

ax.pie([female, male], labels=['Female', 'Male'],
       colors=['#ff00ff', '#ffff00'], autopct='%f1.1f%%',
       startangle=90)

ax.set_title('Covid 19 basic static result')

plt.tight_layout()

plt.show()

