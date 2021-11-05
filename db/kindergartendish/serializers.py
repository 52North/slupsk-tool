from wq.db.patterns import serializers as patterns
from .models import Kindergartendish, Composition


class CompositionSerializer(patterns.AttachmentSerializer):
    class Meta(patterns.AttachmentSerializer.Meta):
        model = Composition
        exclude = ('kindergartendish',)
        object_field = 'kindergartendish'
        wq_config = {
            'initial': 0,
        }


class KindergartendishSerializer(patterns.AttachedModelSerializer):
    compositions = CompositionSerializer(many=True, required=False)

    class Meta:
        model = Kindergartendish
        fields = "__all__"
