import torch

# Model
model = torch.hub.load('ultralytics/yolov5', 'yolov5s')

# Images
dir = 'https://github.com/ultralytics/yolov5/raw/master/data/images/'
imgs = [dir +'bus.jpg']  # batch of images

# Inference
results = model(imgs)

print(results.tolist()[0])
print(results.pandas())  # or .show(), .save()