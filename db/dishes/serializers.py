from wq.db.patterns import serializers as patterns
from .models import Dishes, Ingredient, Photo


class IngredientSerializer(patterns.AttachmentSerializer):
    class Meta(patterns.AttachmentSerializer.Meta):
        model = Ingredient
        exclude = ('dishes',)
        object_field = 'dishes'
        wq_config = {
            'initial': 1,
        }


class PhotoSerializer(patterns.AttachmentSerializer):
    class Meta(patterns.AttachmentSerializer.Meta):
        model = Photo
        exclude = ('dishes',)
        object_field = 'dishes'


class DishesSerializer(patterns.AttachedModelSerializer):
    ingredients = IngredientSerializer(many=True)
    photos = PhotoSerializer(many=True)

    class Meta:
        model = Dishes
        fields = "__all__"
