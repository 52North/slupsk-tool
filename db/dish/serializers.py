from rest_framework import serializers
from wq.db.patterns import serializers as patterns
from .models import Dish, Composition, Photo


class CompositionSerializer(patterns.AttachmentSerializer):
    class Meta(patterns.AttachmentSerializer.Meta):
        model = Composition
        exclude = ('dish',)
        object_field = 'dish'
        wq_config = {
            'initial': 1,
        }


class PhotoSerializer(patterns.AttachmentSerializer):
    class Meta(patterns.AttachmentSerializer.Meta):
        model = Photo
        exclude = ('dish',)
        object_field = 'dish'


class DishSerializer(patterns.AttachedModelSerializer):
    compositions = CompositionSerializer(many=True, required=False)
    photos = PhotoSerializer(many=True, required=False)
    first_photo = serializers.SerializerMethodField()

    def get_first_photo(self, instance):
        photo = instance.photos.first()
        if photo and photo.photo:
            return photo.photo.name

    class Meta:
        model = Dish
        fields = "__all__"
